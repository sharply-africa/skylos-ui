import React, { forwardRef } from "react";
import styled from "@emotion/styled";
import { Box, mergeRefs } from "system";
import PhoneInput from "react-phone-input-2";
import { useSkylosTheme } from "src/system";
import { usePlacesWidget } from "react-google-autocomplete";

const PhoneInputWrapper = styled(Box)`
  .react-tel-input {
    border-radius: ${({ theme }) => theme.radii.base};
    border: 1px solid #e7ece8;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.sm};

    .flag-dropdown {
      border: none;

      &.open {
        border-radius: ${({ theme }) => theme.radii.base};
      }
    }

    .form-control {
      appearance: none;
      border: none;
      color: ${({ theme }) => theme.colors.heading};
      font-weight: ${({ theme }) => theme.fontWeights.normal};
      height: unset;
      line-height: ${({ theme }) => theme.lineHeights.default};
      outline: none;
      padding-bottom: ${({ theme }) => theme.space[3]};
      padding-left: ${({ theme }) => theme.space[12]};
      padding-right: ${({ theme }) => theme.space[4]};
      padding-top: ${({ theme }) => theme.space[3]};
      width: 100%;

      &:placholder {
        color: #c4c4c4;
      }
    }

    &:focus-within {
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const InputComponent = forwardRef((props, ref) => (
  <Box
    as="input"
    ref={ref}
    tx="form"
    {...props}
    __css={{
      appearance: "none",
      backgroundColor: "white",
      border: "1px solid",
      borderColor: "#E7ECE8",
      borderRadius: "base",
      color: "heading",
      fontFamily: "body",
      fontSize: ["sm"],
      fontWeight: "normal",
      lineHeight: "default",
      outline: "none",
      px: 4,
      py: 3,
      width: "100%",
      "&:focus": {
        borderColor: "primary",
      },
      "&:placholder": {
        color: "#C4C4C4",
      },
    }}
  />
));

export const Input = forwardRef(({ onChange, type, value, ...props }, ref) => {
  const { googleMapsKey } = useSkylosTheme();

  const { ref: placesRef } = usePlacesWidget({
    apiKey: googleMapsKey,
    onPlaceSelected: onChange,
    options: {
      types: ["geocode", "establishment"],
      componentRestrictions: { country: "ng" },
    },
  });

  if (type === "phone") {
    return (
      <PhoneInputWrapper ref={ref}>
        <PhoneInput
          autoFormat
          country="ng"
          inputProps={{ ...props }}
          onChange={onChange}
          value={value}
          {...props}
        />
      </PhoneInputWrapper>
    );
  }

  if (type === "address") {
    return (
      <InputComponent
        ref={mergeRefs(ref, placesRef)}
        type={type}
        value={value}
        {...props}
      />
    );
  }

  return (
    <InputComponent
      onChange={onChange}
      ref={ref}
      type={type}
      value={value}
      {...props}
    />
  );
});
