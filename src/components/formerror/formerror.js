import React, { forwardRef } from "react";
import { ReactComponent as CautionIcon } from "icons/caution.svg";
import { Box } from "system";
import { Text } from "../text";
import { Stack } from "../stack";

export const FormError = forwardRef((props, ref) => {
  const { error } = props;

  if (!error) return null;

  return (
    <Stack
      ref={ref}
      spacing={1}
      direction="row"
      sx={{
        alignItems: "center",
        backgroundColor: "red.50",
        border: "1px solid",
        borderColor: "red.100",
        borderRadius: "base",
        display: "flex",
        px: 2,
        py: "1px",
      }}
      {...props}
    >
      <Box sx={{ flexShrink: 0 }}>
        <CautionIcon />
      </Box>
      <Text variant="errorText">{error}</Text>
    </Stack>
  );
});
