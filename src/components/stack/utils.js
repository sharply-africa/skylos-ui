// component utils source (Chakra UI): https://github.com/chakra-ui/chakra-ui/blob/main/packages/layout/src/stack.tsx

import React from "react";

export function getValidChildren(children) {
  return React.Children.toArray(children).filter((child) =>
    React.isValidElement(child)
  );
}

export const selector = "& > *:not(style) ~ *:not(style)";

export function isArray(value) {
  return Array.isArray(value);
}

export const objectKeys = (obj) => Object.keys(obj);

export const isObject = (value) => {
  const type = typeof value;
  return (
    value != null &&
    (type === "object" || type === "function") &&
    !isArray(value)
  );
};

export function mapResponsive(prop, mapper) {
  if (isArray(prop)) {
    return prop.map((item) => {
      if (item === null) {
        return null;
      }
      return mapper(item);
    });
  }

  if (isObject(prop)) {
    return objectKeys(prop).reduce((result: Dict, key) => {
      result[key] = mapper(prop[key]);
      return result;
    }, {});
  }

  if (prop != null) {
    return mapper(prop);
  }

  return null;
}

export function getStackStyles(options) {
  const { spacing, direction } = options;

  const directionStyles = {
    column: { marginTop: spacing, marginLeft: 0 },
    row: { marginLeft: spacing, marginTop: 0 },
    "column-reverse": { marginBottom: spacing, marginRight: 0 },
    "row-reverse": { marginRight: spacing, marginBottom: 0 },
  };

  return {
    flexDirection: direction,
    [selector]: mapResponsive(direction, (value) => directionStyles[value]),
  };
}

export function getDividerStyles(options) {
  const { spacing, direction } = options;

  const dividerStyles = {
    column: {
      my: spacing,
      mx: 0,
      borderLeftWidth: 0,
      borderBottomWidth: "1px",
    },
    "column-reverse": {
      my: spacing,
      mx: 0,
      borderLeftWidth: 0,
      borderBottomWidth: "1px",
    },
    row: {
      mx: spacing,
      my: 0,
      borderLeftWidth: "1px",
      borderBottomWidth: 0,
    },
    "row-reverse": {
      mx: spacing,
      my: 0,
      borderLeftWidth: "1px",
      borderBottomWidth: 0,
    },
  };

  return {
    "&": mapResponsive(direction, (value) => dividerStyles[value]),
  };
}
