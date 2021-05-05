import React, {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Box } from "system";

const AccordionContext = createContext();

export const Accordion = forwardRef(
  ({ children, initialOpen = false, onChange = () => {}, ...rest }, ref) => {
    const [isOpen, setIsOpen] = useState(initialOpen);
    const [contentHeight, setContentHeight] = useState(0);
    const contentRef = useRef();

    const toggleOpen = useCallback(() => setIsOpen((v) => !v), []);

    useEffect(() => {
      setContentHeight(isOpen ? getContentHeight() : 0);
      onChange(isOpen);
    }, [isOpen, onChange]);

    const getContentHeight = () => {
      return contentRef?.current?.offsetHeight;
    };

    const value = useMemo(
      () => ({
        contentHeight,
        contentRef,
        isOpen,
        toggleOpen,
      }),
      [contentHeight, contentRef, isOpen, toggleOpen]
    );

    return (
      <Box
        ref={ref}
        {...rest}
        __css={{
          bg: "white",
          borderRadius: "lg",
          overflow: "hidden",
          userSelect: "none",
        }}
      >
        <AccordionContext.Provider value={value}>
          {children}
        </AccordionContext.Provider>
      </Box>
    );
  }
);

export const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) throw "useAccordion should be used in an AccordionProvider";
  return context;
};
