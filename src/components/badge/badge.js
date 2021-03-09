import React, { useEffect, useMemo, useState } from "react";
import { useTheme } from "@emotion/react";
import { Box } from "system";
import tinycolor from "tinycolor2";
import { Text } from "../text";

const VARIANTS = {
  error: "#E47A7A",
  info: "#6041E0",
  pending: "#E1A300",
  success: "#4BC3BC",
};

export const Badge = ({ alpha, children, color, text, variant, ...props }) => {
  const [bg, setBg] = useState("");

  const theme = useTheme();
  const themeColor = useMemo(() => {
    if (color) {
      return theme.colors[color] || color;
    } else {
      return VARIANTS[variant];
    }
  }, [color, variant, theme.colors]);

  useEffect(() => {
    const newTinyColor = tinycolor(themeColor);
    newTinyColor.setAlpha(alpha);
    setBg(newTinyColor.toRgbString());
  }, [alpha, color, themeColor]);

  return (
    <Box
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
};

Badge.defaultProps = {
  alpha: 0.25,
  variant: "success",
};
