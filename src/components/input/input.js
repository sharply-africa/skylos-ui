import React, { forwardRef } from "react";
import styled from "@emotion/styled";
import { Box, mergeRefs, useSkylosTheme } from "system";
import PhoneInput from "react-phone-input-2";
import { usePlacesWidget } from "react-google-autocomplete";
import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";

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

      &:disabled {
        background-color: #e7ece8;
        opacity: 0.5;
      }

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
      "&:disabled": {
        backgroundColor: "#E7ECE8",
        opacity: 0.5,
      },
      "&:readonly": {
        backgroundColor: "#E7ECE8",
        opacity: 0.5,
      },
      "&:focus": {
        borderColor: "primary",
      },
      "&:placholder": {
        color: "#C4C4C4",
      },
    }}
  />
));

const AUTOCOMPLETE_FIELDS = ["geometry.location", "formatted_address"];

export const Input = forwardRef(
  ({ onChange, type, value, placesOptions, ...props }, ref) => {
    const hasSetDefaultValue = React.useRef(false);
    const { googleMapsKey } = useSkylosTheme();

    const { ref: placesRef } = usePlacesWidget({
      apiKey: googleMapsKey,
      onPlaceSelected: (location) => {
        placesRef.current.value = location?.formatted_address || "";
        onChange(location);
      },
      options: {
        types: ["geocode", "establishment"],
        fields: AUTOCOMPLETE_FIELDS,
        ...placesOptions,
      },
    });

    const {
      placePredictions,
      getPlacePredictions,
      placesService,
      isPlacePredictionsLoading,
    } = usePlacesService({
      apiKey: googleMapsKey,
      options: {
        types: ["address"],
        ...placesOptions,
      },
    });

    React.useEffect(() => {
      if (
        props.defaultValue &&
        type === "address" &&
        !hasSetDefaultValue.current
      ) {
        placesRef.current.value = props.defaultValue;
        getPlacePredictions({ input: props.defaultValue });
        hasSetDefaultValue.current = true;
      }
    }, [props.defaultValue, type]);

    React.useEffect(() => {
      if (!isPlacePredictionsLoading && placePredictions.length) {
        const { place_id } = placePredictions[0];

        placesService?.getDetails(
          { placeId: place_id, fields: AUTOCOMPLETE_FIELDS },
          (place) => {
            onChange(place);
            hasSetDefaultValue.current = false;
          }
        );
      }
    }, [isPlacePredictionsLoading, placePredictions, placesService, onChange]);

    React.useEffect(() => {
      if (!value && placesRef?.current) {
        placesRef.current.value = "";
      }
    }, [placesRef, value]);

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
          autoComplete="off"
          type={type}
          {...props}
          onBlur={(evt) => {
            props.onBlur?.(evt);
            if (!evt.target.value) {
              onChange(null);
            }
          }}
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
  }
);
