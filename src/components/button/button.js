import React, { forwardRef } from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import tinycolor from "tinycolor2";
import { ReactComponent as ArrowRight } from "icons/arrow-right.svg";
import { Box } from "system";
import { Spinner } from "../spinner";

const IconWrapper = styled(Box)`
  svg {
    fill: ${({ fill }) => fill};
  }
`;

export const Button = forwardRef((props, ref) => {
  const {
    children,
    colorScheme = "primary",
    defaultRightIcon,
    iconSpacing = 4,
    isDisabled,
    isLoading,
    leftIcon,
    rightIcon,
    textColor,
    variant = "solid",
    ...rest
  } = props;

  const theme = useTheme();
  const color = theme.colors[colorScheme] || colorScheme;
  const newTextColor =
    textColor || variant !== "solid"
      ? color
      : tinycolor(color).isLight()
      ? theme.colors.primary
      : theme.colors.white;

  const wrapperWithIconStyle =
    leftIcon || rightIcon || defaultRightIcon
      ? {
          justifyContent: isLoading ? "center" : "space-between",
        }
      : {};

  const renderRightIcon = () => {
    const wrapperProps = {
      fill: newTextColor,
      ml: iconSpacing,
    };

    if (isLoading) return null;

    if (rightIcon) {
      return <IconWrapper {...wrapperProps}>{rightIcon}</IconWrapper>;
    } else if (defaultRightIcon) {
      return (
        <IconWrapper {...wrapperProps}>
          <ArrowRight />
        </IconWrapper>
      );
    }
    return null;
  };

  return (
    <Box
      ref={ref}
      as="button"
      tx="buttons"
      colorScheme={colorScheme}
      disabled={isDisabled || isLoading}
      {...props}
      __css={{
        alignItems: "center",
        appearance: "none",
        bg: color,
        border: 0,
        borderRadius: "base",
        color: newTextColor,
        display: "inline-flex",
        fontSize: "sm",
        position: "relative",
        px: 6,
        py: 4,
        textAlign: "center",
        textDecoration: "none",
        transition: "all 250ms",
        userSelect: "none",
        width: props.isFullWidth ? "100%" : "auto",
      }}
      variant={variant}
      {...wrapperWithIconStyle}
      {...rest}
    >
      {leftIcon && !isLoading && (
        <IconWrapper fill={newTextColor} mr={iconSpacing}>
          {leftIcon}
        </IconWrapper>
      )}
      {isLoading ? <Spinner size={1.5} thickness="1px" /> : children}
      {renderRightIcon()}
    </Box>
  );
});
