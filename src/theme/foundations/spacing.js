export const spacing = [...new Array(96)].reduce((acc, _, x) => {
  acc = {
    ...acc,
    [x]: `${(x * 4) / 10}rem`,
    [`-${x}`]: `${-(x * 4) / 10}rem`,
  };
  return acc;
}, {});
