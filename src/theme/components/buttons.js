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
    background: "none",
    color: "inherit",
    display: "inline-block",
    lineHeight: "inherit",
    px: 0,
    py: 0,
  },
  iconSquare: {
    alignItems: "center",
    background: "white",
    borderRadius: "base",
    height: 40,
    justifyContent: "center",
    px: 1,
    py: 4,
    width: 40,
    " > svg": {
      fill: "heading",
    },
  },
};
