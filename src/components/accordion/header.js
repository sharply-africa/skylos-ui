import React, { forwardRef } from "react";
import { Box } from "system";
import { ReactComponent as CaretDown } from "icons/caret-down.svg";
import { useAccordion } from "./accordion";

export const AccordionHeader = forwardRef(({ children, ...props }, ref) => {
  const { isOpen, toggleOpen } = useAccordion();

  return (
    <Box
      onClick={toggleOpen}
      ref={ref}
      {...props}
      __css={{
        alignItems: "center",
        cursor: "pointer",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        p: 4,
      }}
    >
      <Box
        __css={{
          flex: 1,
        }}
      >
        {children}
      </Box>

      <Box
        __css={{
          flexShrink: 0,
          ml: 2,
          transform: isOpen ? "rotate(-180deg)" : "",
          transition: "all 0.2s",
        }}
      >
        <CaretDown />
      </Box>
    </Box>
  );
});
