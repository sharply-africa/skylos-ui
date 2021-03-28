const text = {
  color: "text",
  fontFamily: "body",
  fontSize: ["sm"],
  fontWeight: "normal",
  lineHeight: "1.6",
};

export const typography = {
  heading: {
    color: "heading",
    fontFamily: "heading",
    fontSize: ["2xl"],
    fontWeight: "medium",
    lineHeight: "1.185",
  },
  text: {
    ...text,
  },
  thickText: {
    ...text,
    color: "heading",
    fontWeight: "medium",
  },
  errorText: {
    color: "red.300",
    fontFamily: "body",
    fontSize: ["xs"],
    fontWeight: "normal",
    lineHeight: "1.6",
  },
};
