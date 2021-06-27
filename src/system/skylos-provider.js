import * as React from "react";
import { Slide, ToastContainer } from "react-toastify";
import { ThemeProvider } from "@emotion/react";
import merge from "lodash.merge";
import CSSReset from "css-reset";
import ToastReset from "toast-reset";
import defaultTheme from "theme";

export const SkylosContext = React.createContext();

export const useSkylosTheme = () => {
  const context = React.useContext(SkylosContext);

  if (!context) {
    throw new Error("useSkylosTheme must be used within the SkylosProvider");
  }

  return context;
};

export const SkylosProvider = (props) => {
  const {
    children,
    googleMapsKey = "",
    resetCSS = true,
    theme = defaultTheme,
  } = props;
  const [customTheme, setCustomTheme] = React.useState({ ...theme });

  const updateTheme = React.useCallback(
    (newTheme = {}) => setCustomTheme((v) => merge(v, newTheme)),
    []
  );

  const value = React.useMemo(
    () => ({
      customTheme,
      updateTheme,
      googleMapsKey,
    }),
    [customTheme, updateTheme, googleMapsKey]
  );

  return (
    <SkylosContext.Provider value={value}>
      <ThemeProvider theme={customTheme}>
        {resetCSS && <CSSReset />}
        {children}
        <ToastContainer
          autoClose={5000}
          closeOnClick
          draggable
          hideProgressBar
          newestOnTop
          pauseOnFocusLoss
          pauseOnHover
          position="bottom-center"
          rtl={false}
          transition={Slide}
        />
        <ToastReset />
      </ThemeProvider>
    </SkylosContext.Provider>
  );
};
