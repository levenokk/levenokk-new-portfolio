import { BreakpointsOptions } from '@mui/system';

export const breakpoints: BreakpointsOptions = {
  values: {
    mobile: 0,
    tablet: 640,
    laptop: 992,
    desktop: 1280,
  },
};

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
}
