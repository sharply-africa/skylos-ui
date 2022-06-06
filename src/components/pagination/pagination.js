import React, { forwardRef, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Box, Flex } from "system";
import { ReactComponent as CaretLeft } from "icons/caret-left.svg";
import { ReactComponent as CaretRight } from "icons/caret-right.svg";
import { Select } from "../select";
import { Text } from "../text";

const Wrapper = styled(Box)`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const Controls = styled(Flex)`
  flex-shrink: 0;
`;

const Control = styled(Flex)`
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  border: 1px solid rgba(162, 162, 186, 0.21);
  box-shadow: 0px 4px 4px rgba(241, 250, 249, 0.19);
  cursor: pointer;
  height: 3.6rem;
  justify-content: center;
  transition: all 0.2s;
  user-select: none;
  width: 3.6rem;

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.4;
    `}
`;

export const Pagination = forwardRef(
  ({ page = 1, onChange = () => {}, total }, ref) => {
    const onSelectChange = (e) => {
      const page = +e.target.value;
      onChange(page);
    };

    const goToPrev = () => {
      if (page > 1) {
        onChange(+page - 1);
      }
    };

    const goToNext = () => {
      if (page < total) {
        onChange(+page + 1);
      }
    };

    if (!total) return null;

    return (
      <Wrapper ref={ref}>
        <Flex alignItems="center">
          <Select
            minWidth="8rem"
            mr={2}
            onChange={onSelectChange}
            py="0.9rem"
            value={page}
          >
            {[...Array(total + 1).keys()]
              .filter((x) => x > 0)
              .map((x) => (
                <option key={x} value={x}>
                  {x}
                </option>
              ))}
          </Select>

          <Text flexShrink={0}>of {total}</Text>
        </Flex>

        <Controls>
          <Control disabled={page < 2} onClick={goToPrev}>
            <CaretLeft />
          </Control>

          <Control disabled={page > total - 1} onClick={goToNext} ml="-4px">
            <CaretRight />
          </Control>
        </Controls>
      </Wrapper>
    );
  }
);
