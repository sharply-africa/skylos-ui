import React, { forwardRef } from "react";
import { Box } from "system";
import { ReactComponent as ArrowLeft } from "icons/arrow-left.svg";
import { Text } from "../text";
import { Card } from "../card";

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
    <Card ref={ref} {...rest}>
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
    </Card>
  );
});
