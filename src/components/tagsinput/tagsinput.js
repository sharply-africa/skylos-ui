import React from "react";
import Input from "react-tagsinput";
import styled from "@emotion/styled";
import { Box } from "system";

const Wrapper = styled(Box)`
  .react-tagsinput {
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid #e7ece8;
    border-radius: 0.4rem;
    padding-left: 1.6rem;
    padding-top: 0.4rem;
  }

  .react-tagsinput-tag {
    align-items: center;
    background-color: #f1faf9;
    border-radius: 500px;
    border: none;
    color: ${({ theme }) => theme.colors.heading};
    display: inline-flex;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    margin-bottom: 0.4rem;
    margin-right: 1.6rem;
    padding: 0.4rem 0.4rem 0.4rem 1.6rem;
  }

  .react-tagsinput-remove {
    align-items: center;
    background-color: #c4c4c4;
    border-radius: 50%;
    cursor: pointer;
    display: inline-flex;
    flex-shrink: 0;
    height: 3rem;
    justify-content: center;
    margin-left: 1.2rem;
    position: relative;
    width: 3rem;

    &:before,
    &:after {
      background-color: #f1faf9;
      border-radius: 0;
      content: "";
      height: 1px;
      left: 50%;
      position: absolute;
      top: 50%;
      width: 15px;
    }

    &:before {
      transform: translate(-50%, -50%) rotate(45deg);
    }
    &:after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }

  .react-tagsinput-input {
    color: ${({ theme }) => theme.colors.heading};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    margin-bottom: 0.6rem;
    margin-top: 1px;
    outline: none;
    padding: 0.8rem 0.4rem;

    &:placholder {
      color: #c4c4c4;
    }
  }
`;

export const TagsInput = ({
  onChange,
  value,
  inputProps,
  wrapperProps,
  ...props
}) => {
  return (
    <Wrapper {...wrapperProps}>
      <Input
        onChange={onChange}
        value={value}
        inputProps={{
          enterkeyhint: "enter",
          placeholder: "Type and press enter",
          ...inputProps,
        }}
        {...props}
      />
    </Wrapper>
  );
};

TagsInput.defaultProps = {
  inputProps: {},
  onChange: () => {},
  onlyUnique: true,
  value: [],
};
