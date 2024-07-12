export const Units = {
  px: 'px',
  percent: '%',
  vw: 'vw',
  vh: 'vh',
} as const;

export const units = {
  width: [Units.px, Units.percent, Units.vw] as const,
  height: [Units.px, Units.percent, Units.vh] as const,
};
