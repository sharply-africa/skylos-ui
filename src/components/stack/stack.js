// component source (Chakra UI): https://github.com/chakra-ui/chakra-ui/blob/main/packages/layout/src/stack.tsx

import React, { forwardRef } from "react";
import { Box } from "system";
import {
  getDividerStyles,
  getStackStyles,
  getValidChildren,
  selector,
} from "./utils";

export const StackItem = (props) => (
  <Box
    {...props}
    __css={{
      display: "inline-block",
      flex: "0 0 auto",
      minWidth: 0,
      ...props["__css"],
    }}
  />
);

export const Stack = forwardRef((props, ref) => {
  const {
    isInline,
    direction: directionProp,
    align,
    justify,
    spacing = "0.5rem",
    wrap,
    children,
    divider,
    className,
    shouldWrapChildren,
    ...rest
  } = props;

  const direction = isInline ? "row" : directionProp ?? "column";

  const styles = React.useMemo(() => getStackStyles({ direction, spacing }), [
    direction,
    spacing,
  ]);

  const dividerStyle = React.useMemo(
    () => getDividerStyles({ spacing, direction }),
    [spacing, direction]
  );

  const hasDivider = !!divider;
  const shouldUseChildren = !shouldWrapChildren && !hasDivider;

  const validChildren = getValidChildren(children);

  const clones = shouldUseChildren
    ? validChildren
    : validChildren.map((child, index) => {
        const isLast = index + 1 === validChildren.length;
        const wrappedChild = <StackItem key={index}>{child}</StackItem>;
        const _child = shouldWrapChildren ? wrappedChild : child;

        if (!hasDivider) return _child;

        const clonedDivider = React.cloneElement(divider, {
          __css: dividerStyle,
        });

        const _divider = isLast ? null : clonedDivider;

        return (
          <React.Fragment key={index}>
            {_child}
            {_divider}
          </React.Fragment>
        );
      });

  return (
    <Box
      ref={ref}
      display="flex"
      alignItems={align}
      justifyContent={justify}
      flexDirection={styles.flexDirection}
      flexWrap={wrap}
      className={className}
      __css={hasDivider ? {} : { [selector]: styles[selector] }}
      {...rest}
    >
      {clones}
    </Box>
  );
});
