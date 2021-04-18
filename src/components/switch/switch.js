import React, { useEffect, useRef, useState, forwardRef } from "react";

import { Box } from "system";
import { Stack } from "../stack";
import { Text } from "../text";

export const Switch = forwardRef((props, ref) => {
  const {
    active,
    activeBackgroundColor = "#6041E0",
    inactiveBackgroundColor = "#C4C4C4",
    onChange = () => {},
    subtitle,
    subtitleProps = {},
    title,
    titleProps = {},
    trackGap = 3,
    trackHeight = "1.4rem",
    trackWidth = "2.6rem",
  } = props;

  const [thumbWidth, setThumbWidth] = useState(0);
  const [trackClientWidth, setTrackWidth] = useState(0);
  const trackRef = useRef();

  useEffect(() => {
    if (trackRef?.current?.clientWidth) {
      setThumbWidth(trackRef?.current?.clientHeight - trackGap * 2);
      setTrackWidth(trackRef?.current?.clientWidth);
    }
  }, [trackGap]);

  return (
    <Stack
      direction="row"
      spacing={2}
      ref={ref}
      onClick={() => onChange(!active)}
      {...props}
    >
      <Box
        ref={trackRef}
        __css={{
          backgroundColor: active
            ? activeBackgroundColor
            : inactiveBackgroundColor,
          borderRadius: "full",
          cursor: "pointer",
          display: "flex",
          position: "relative",
          height: trackHeight,
          width: trackWidth,
          px: `${trackGap}px`,
          py: `${trackGap}px`,
        }}
      >
        <Box
          __css={{
            backgroundColor: "white",
            borderRadius: "50%",
            height: thumbWidth,
            left: !active
              ? `${trackGap}px`
              : `${trackClientWidth - trackGap - thumbWidth}px`,
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            transition: "all 0.2s",
            width: thumbWidth,
          }}
        />
      </Box>

      <Stack spacing={1}>
        {title ? (
          <Text fontSize="xs" color="heading" {...titleProps}>
            {title}
          </Text>
        ) : null}

        {subtitle ? (
          <Text fontSize="xxs" color="text" {...subtitleProps}>
            {subtitle}
          </Text>
        ) : null}
      </Stack>
    </Stack>
  );
});
