import React, { useEffect, useMemo, useState, forwardRef } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";
import { Box } from "system";
import tinycolor from "tinycolor2";
import { Text } from "../text";

const VARIANTS = {
  default: "#0988FD",
  error: "#E47A7A",
  info: "#07AFC6",
  success: "#4BC3BC",
  warning: "#E1A300",
};

export const Badge = forwardRef(
  ({ alpha, children, color, text, variant, ...props }, ref) => {
    const [bg, setBg] = useState("");

    const theme = useTheme();
    const themeColor = useMemo(() => {
      if (color) {
        return theme.colors[color] || color;
      } else {
        return VARIANTS[variant];
      }
    }, [color, variant, theme.colors]);

    const getPropName = (prop) => {
      return prop.replace("var(", "").replace(")", "");
    };

    useEffect(() => {
      const root = document.querySelector(":root");
      const rs = getComputedStyle(root);

      const propName = getPropName(themeColor);

      const hexColor = themeColor.startsWith("var")
        ? rs.getPropertyValue(propName)
        : themeColor;

      const newTinyColor = tinycolor(hexColor);
      newTinyColor.setAlpha(alpha);
      setBg(newTinyColor.toRgbString());
    }, [alpha, color, themeColor]);

    return (
      <Box
        ref={ref}
        {...props}
        __css={{
          bg,
          borderRadius: "full",
          display: "inline-block",
          px: 2,
          py: 1,
        }}
      >
        {children || (
          <Text fontSize="xs" color={themeColor}>
            {text}
          </Text>
        )}
      </Box>
    );
  }
);

Badge.propTypes = {
  variant: PropTypes.oneOf(["default", "error", "info", "success", "warning"]),
};

Badge.defaultProps = {
  alpha: 0.25,
  variant: "success",
};
