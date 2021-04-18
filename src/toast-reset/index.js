import * as React from "react";
import { Global } from "@emotion/react";
import tinycolor from "tinycolor2";

const getPropName = (prop) => {
  return prop.replace("var(", "").replace(")", "");
};

const getColor = (color) => {
  if (typeof window !== "undefined" && color) {
    const root = document.querySelector(":root");
    const rs = getComputedStyle(root);
    const propName = getPropName(color);
    const hexColor = color.startsWith("var")
      ? rs.getPropertyValue(propName)
      : color;

    const newTinyColor = tinycolor(hexColor);
    newTinyColor.lighten(30);
    return { color, background: newTinyColor.toHexString() };
  }
  return { color, background: "" };
};

export const ToastReset = () => {
  return (
    <Global
      styles={`
        .Toastify__toast-container {
          align-items: center;
          display: flex;
          flex-direction: column;
        }

        .Toastify__toast {
          align-items: center;
          background: ${getColor("var(--primary)")?.background};
          border-radius: 10px;
          box-shadow: none;
          color: ${getColor("var(--primary)")?.color};
          display: inline-flex;
          min-height: 5rem;
          min-width: 27.5rem;
        }

        .Toastify__toast--error {
          background: #f49c9c;
          color: #DF1818;
        }
        .Toastify__toast--success {
          background: #bee9e7;
          color: #4BC3BC;
        }

        .Toastify__toast--warning {
          background: #ffdb7b;
          color: #E1A300;
        }

        .Toastify__toast--info {
          background: #abd3ea;
          color: #3393C9;
        }

        .Toastify__toast-body {
          align-items: center;
          display: flex;
          font-family: inherit;
          font-size: 1.4rem;
          font-weight: normal;
          justify-content: space-between;
          padding: 0 1rem;
        }

        .Toastify__toast-body span {
          font-size: 1.4rem;
          font-weight: normal;
        }
        .Toastify__toast-body svg {
          display: none;
        }

        .Toastify__close-button {
          display: none;
        }
    `}
    />
  );
};

export default ToastReset;
