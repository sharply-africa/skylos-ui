export const spacing = [...new Array(96)].reduce((acc, _, x) => {
  acc = {
    ...acc,
    [x]: x * 4,
    [`${x}px`]: x,
    [`-${x}`]: -(x * 4),
    [`-${x}px`]: -x,
  };
  return acc;
}, {});
