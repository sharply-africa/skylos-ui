import * as React from "react";
import { ThemeProvider } from "@emotion/react";
import CSSReset from "css-reset";
import defaultTheme from "theme";

export const SkylosProvider = (props) => {
  const { children, resetCSS = true, theme = defaultTheme } = props;

  return (
    <ThemeProvider theme={theme}>
      {resetCSS && <CSSReset />}
      {children}
    </ThemeProvider>
  );
};
