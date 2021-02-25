import React, { forwardRef } from "react";

import { Box } from "system";

export const Heading = forwardRef((props, ref) => (
  <Box ref={ref} as="h2" tx="text" variant="heading" {...props} />
));
