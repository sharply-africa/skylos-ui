import React, { useEffect, useMemo, useState, forwardRef } from "react";
import { useTheme } from "@emotion/react";
import { Box } from "system";
import tinycolor from "tinycolor2";
import { Text } from "../text";

const VARIANTS = {
  error: "#E47A7A",
  primary: "var(--primary)",
  pending: "#E1A300",
  success: "#4BC3BC",
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

Badge.defaultProps = {
  alpha: 0.25,
  variant: "success",
};
