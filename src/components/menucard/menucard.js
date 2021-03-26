import React, { forwardRef } from "react";
import { Box } from "system";
import { ReactComponent as ArrowLeft } from "icons/arrow-left.svg";
import { Text } from "../text";

export const MenuCard = forwardRef((props, ref) => {
  const {
    icon,
    iconBg = "primary",
    iconProps,
    showArrow = true,
    text,
    ...rest
  } = props;

  return (
    <Box
      ref={ref}
      {...rest}
      __css={{
        alignItems: "center",
        bg: "white",
        borderRadius: "lg",
        boxShadow: "0px 4px 4px #F1FAF9",
        cursor: "pointer",
        display: "flex",
        px: 4,
        py: 2,
      }}
    >
      {icon ? (
        <Box
          {...iconProps}
          __css={{
            alignItems: "center",
            bg: iconBg,
            borderRadius: "50%",
            display: "flex",
            height: "3.3rem",
            justifyContent: "center",
            mr: 4,
            width: "3.3rem",
          }}
        >
          {icon}
        </Box>
      ) : null}

      <Text color="heading" fontWeight="medium">
        {text}
      </Text>

      {showArrow && (
        <Box ml="auto" __css={{ transform: "rotate(180deg)" }}>
          <Box ml={2}>
            <ArrowLeft />
          </Box>
        </Box>
      )}
    </Box>
  );
});
