import { breakpoints } from "./breakpoints";
import { colors } from "./colors";
import { mq } from "./media-query";
import { radii } from "./radii";
import { spacing } from "./spacing";
import { typography } from "./typography";
import { zIndices } from "./z-index";

const foundations = {
  ...typography,
  breakpoints: [...Object.values(breakpoints)],
  colors,
  mq,
  radii,
  space: spacing,
  zIndices,
};

export default foundations;
