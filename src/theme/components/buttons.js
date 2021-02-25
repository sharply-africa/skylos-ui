const baseStyle = {
  borderRadius: "base",
  fontWeight: "normal",
  lineHeight: "1",
  "&:disabled": {
    opacity: 0.4,
    cursor: "not-allowed",
  },
};

export const buttons = {
  solid: {
    ...baseStyle,
  },
  outline: {
    ...baseStyle,
    bg: "transparent",
    border: "1px solid",
    borderColor: "currentColor",
  },
  plain: {
    bg: "none",
    color: "inherit",
    display: "inline",
    lineHeight: "inherit",
    px: 0,
    py: 0,
  },
};
