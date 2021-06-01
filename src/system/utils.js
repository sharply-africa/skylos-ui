import tinycolor from "tinycolor2";

const getPropName = (prop) => {
  return prop.replace("var(", "").replace(")", "");
};

export const getColorHex = (color) => {
  if (typeof window !== "undefined" && color) {
    const root = document.querySelector(":root");
    const rs = getComputedStyle(root);
    const propName = getPropName(color);
    const hexColor = color.startsWith("var")
      ? rs.getPropertyValue(propName)
      : color;

    const newTinyColor = tinycolor(hexColor);
    newTinyColor.lighten(30);
    return newTinyColor.toHexString();
  }
  return color;
};

export const mergeRefs = (...refs) => {
  const filteredRefs = refs.filter(Boolean);
  if (!filteredRefs.length) return null;
  if (filteredRefs.length === 0) return filteredRefs[0];
  return (inst) => {
    for (const ref of filteredRefs) {
      if (typeof ref === "function") {
        ref(inst);
      } else if (ref) {
        ref.current = inst;
      }
    }
  };
};
