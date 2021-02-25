import defaltTheme from "theme";

export const extendTheme = (theme) => {
  return { ...defaltTheme, ...theme };
};
