import React, { forwardRef } from "react";
import { Box } from "system";
import { Stack } from "../stack";
import { Text } from "../text";

export const Radio = forwardRef((props, ref) => {
  const {
    active,
    size = "1.6rem",
    subtitle,
    subtitleProps = {},
    title,
    titleProps = {},
  } = props;

  return (
    <Stack direction="row" spacing={2} ref={ref} {...props}>
      <Box
        __css={{
          alignItems: "center",
          backgroundColor: active ? "white" : "transparent",
          border: "1px solid",
          borderColor: active ? "primary" : "#C4C4C4",
          borderRadius: "50%",
          cursor: "pointer",
          display: "flex",
          height: size,
          justifyContent: "center",
          padding: "2px",
          position: "relative",
          width: size,
        }}
      >
        <Box
          __css={{
            backgroundColor: "primary",
            borderRadius: "base",
            height: "100%",
            opacity: active ? 1 : 0,
            transition: "all 0.2s",
            width: "100%",
          }}
        />
      </Box>

      <Stack spacing={1}>
        {title ? (
          <Text fontSize="xs" color="heading" {...titleProps}>
            {title}
          </Text>
        ) : null}

        {subtitle ? (
          <Text fontSize="xxs" color="text" {...subtitleProps}>
            {subtitle}
          </Text>
        ) : null}
      </Stack>
    </Stack>
  );
});
