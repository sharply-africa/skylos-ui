import React, { forwardRef } from "react";
import styled from "@emotion/styled";
import { Flex } from "system";

const Wrapper = styled(Flex)`
  > svg {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

const IconBox = forwardRef((props, ref) => {
  return (
    <Wrapper
      alignItems="center"
      backgroundColor="primaryLight"
      borderRadius="base"
      height="6.6rem"
      justifyContent="center"
      px={2}
      py={2}
      width="6.6rem"
      ref={ref}
      {...props}
    />
  );
});

export default IconBox;
