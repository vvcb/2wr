module.exports = {
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      lg: 1280,
      md: 960,
      sm: 600,
      xl: 1920,
      xs: 0,
    },
  },
  direction: 'ltr',
  mixins: {
    toolbar: {
      '@media (min-width:0px) and (orientation: landscape)': {
        minHeight: 48,
      },
      '@media (min-width:600px)': {
        minHeight: 64,
      },
      minHeight: 56,
    },
  },
  overrides: {},
  palette: {
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      hover: 'rgba(0, 0, 0, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(0, 0, 0, 0.14)',
    },
    background: {
      default: '#fafafa',
      paper: '#fff',
    },
    common: {
      black: '#000',
      white: '#fff',
    },
    contrastThreshold: 3,
    divider: 'rgba(0, 0, 0, 0.12)',
    error: {
      contrastText: '#fff',
      dark: '#d32f2f',
      light: '#e57373',
      main: '#f44336',
    },
    grey: {
      '50': '#fafafa',
      '100': '#f5f5f5',
      '200': '#eeeeee',
      '300': '#e0e0e0',
      '400': '#bdbdbd',
      '500': '#9e9e9e',
      '600': '#757575',
      '700': '#616161',
      '800': '#424242',
      '900': '#212121',
      A100: '#d5d5d5',
      A200: '#aaaaaa',
      A400: '#303030',
      A700: '#616161',
    },
    primary: {
      contrastText: '#fff',
      dark: 'rgb(26, 35, 39)',
      light: 'rgb(81, 91, 95)',
      main: '#263238',
    },
    secondary: {
      contrastText: '#F1F8E9',
      dark: 'rgb(154, 30, 0)',
      light: 'rgb(227, 86, 51)',
      main: '#DD2C00',
    },
    text: {
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
    },
    tonalOffset: 0.2,
    type: 'light',
  },
  props: {},
  shadows: [
    'none',
    '0px 1px 3px 0px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
    '0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
    '0px 1px 8px 0px rgba(0, 0, 0, 0.2),0px 3px 4px 0px rgba(0, 0, 0, 0.14),0px 3px 3px -2px rgba(0, 0, 0, 0.12)',
    '0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
    '0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 5px 8px 0px rgba(0, 0, 0, 0.14),0px 1px 14px 0px rgba(0, 0, 0, 0.12)',
    '0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
    '0px 4px 5px -2px rgba(0, 0, 0, 0.2),0px 7px 10px 1px rgba(0, 0, 0, 0.14),0px 2px 16px 1px rgba(0, 0, 0, 0.12)',
    '0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
    '0px 5px 6px -3px rgba(0, 0, 0, 0.2),0px 9px 12px 1px rgba(0, 0, 0, 0.14),0px 3px 16px 2px rgba(0, 0, 0, 0.12)',
    '0px 6px 6px -3px rgba(0, 0, 0, 0.2),0px 10px 14px 1px rgba(0, 0, 0, 0.14),0px 4px 18px 3px rgba(0, 0, 0, 0.12)',
    '0px 6px 7px -4px rgba(0, 0, 0, 0.2),0px 11px 15px 1px rgba(0, 0, 0, 0.14),0px 4px 20px 3px rgba(0, 0, 0, 0.12)',
    '0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0, 0, 0, 0.12)',
    '0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 13px 19px 2px rgba(0, 0, 0, 0.14),0px 5px 24px 4px rgba(0, 0, 0, 0.12)',
    '0px 7px 9px -4px rgba(0, 0, 0, 0.2),0px 14px 21px 2px rgba(0, 0, 0, 0.14),0px 5px 26px 4px rgba(0, 0, 0, 0.12)',
    '0px 8px 9px -5px rgba(0, 0, 0, 0.2),0px 15px 22px 2px rgba(0, 0, 0, 0.14),0px 6px 28px 5px rgba(0, 0, 0, 0.12)',
    '0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0, 0, 0, 0.12)',
    '0px 8px 11px -5px rgba(0, 0, 0, 0.2),0px 17px 26px 2px rgba(0, 0, 0, 0.14),0px 6px 32px 5px rgba(0, 0, 0, 0.12)',
    '0px 9px 11px -5px rgba(0, 0, 0, 0.2),0px 18px 28px 2px rgba(0, 0, 0, 0.14),0px 7px 34px 6px rgba(0, 0, 0, 0.12)',
    '0px 9px 12px -6px rgba(0, 0, 0, 0.2),0px 19px 29px 2px rgba(0, 0, 0, 0.14),0px 7px 36px 6px rgba(0, 0, 0, 0.12)',
    '0px 10px 13px -6px rgba(0, 0, 0, 0.2),0px 20px 31px 3px rgba(0, 0, 0, 0.14),0px 8px 38px 7px rgba(0, 0, 0, 0.12)',
    '0px 10px 13px -6px rgba(0, 0, 0, 0.2),0px 21px 33px 3px rgba(0, 0, 0, 0.14),0px 8px 40px 7px rgba(0, 0, 0, 0.12)',
    '0px 10px 14px -6px rgba(0, 0, 0, 0.2),0px 22px 35px 3px rgba(0, 0, 0, 0.14),0px 8px 42px 7px rgba(0, 0, 0, 0.12)',
    '0px 11px 14px -7px rgba(0, 0, 0, 0.2),0px 23px 36px 3px rgba(0, 0, 0, 0.14),0px 9px 44px 8px rgba(0, 0, 0, 0.12)',
    '0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0, 0, 0, 0.12)',
  ],
  shape: {
    borderRadius: 4,
  },
  spacing: {
    unit: 8,
  },
  themeName: 'Outer Space Grenadier Corydoras',
  transitions: {
    duration: {
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
      short: 250,
      shorter: 200,
      shortest: 150,
      standard: 300,
    },
    easing: {
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
  },
  typography: {
    body1: {
      color: 'rgba(0, 0, 0, 0.87)',
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: '1.46429em',
    },
    body2: {
      color: 'rgba(0, 0, 0, 0.87)',
      // fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      fontSize: '0.75rem',
      fontWeight: 500,
      lineHeight: '1.71429em',
    },
    button: {
      color: 'rgba(0, 0, 0, 0.87)',
      // fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      fontSize: '0.75rem',
      fontWeight: 500,
      textTransform: 'uppercase',
    },
    caption: {
      color: 'rgba(0, 0, 0, 0.54)',
      // fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: '1.375em',
    },
    display1: {
      color: 'rgba(0, 0, 0, 0.54)',
      // fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      fontSize: '2.125rem',
      fontWeight: 400,
      lineHeight: '1.20588em',
    },
    display2: {
      color: 'rgba(0, 0, 0, 0.54)',
      // fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      fontSize: '2.8125rem',
      fontWeight: 400,
      lineHeight: '1.13333em',
      marginLeft: '-.02em',
    },
    display3: {
      color: 'rgba(0, 0, 0, 0.54)',
      // fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      fontSize: '3.5rem',
      fontWeight: 400,
      letterSpacing: '-.02em',
      lineHeight: '1.30357em',
      marginLeft: '-.02em',
    },
    display4: {
      color: 'rgba(0, 0, 0, 0.54)',
      // fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      fontSize: '7rem',
      fontWeight: 300,
      letterSpacing: '-.04em',
      lineHeight: '1.14286em',
      marginLeft: '-.04em',
    },
    fontFamily:
      'Raleway, Source Sans Pro, Roboto, Helvetica, Arial, sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightMedium: 500,
    fontWeightRegular: 400,
    h1: {
      fontFamily:
        'Source Sans Pro, Raleway, Roboto, Helvetica, Arial, sans-serif',
      fontSize: '5rem',
      fontWeight: 300,
      letterSpacing: '-0.01562em',
      lineHeight: 1.5,
    },
    h2: {
      fontFamily:
        'Source Sans Pro, Raleway, Roboto, Helvetica, Arial, sans-serif',
      fontSize: '3.75rem',
      fontWeight: 300,
      letterSpacing: '-0.00833em',
      lineHeight: 1.5,
    },
    h3: {
      fontFamily:
        'Source Sans Pro, Raleway, Roboto, Helvetica, Arial, sans-serif',
      fontSize: '3rem',
      fontWeight: 400,
      letterSpacing: '0em',
      lineHeight: 1.33,
    },
    h4: {
      fontFamily:
        'Source Sans Pro, Raleway, Roboto, Helvetica, Arial, sans-serif',
      fontSize: '2.125rem',
      fontWeight: 400,
      letterSpacing: '0.00735em',
      lineHeight: 1.33,
    },
    h5: {
      fontFamily:
        'Source Sans Pro, Raleway, Roboto, Helvetica, Arial, sans-serif',
      fontSize: '1.5rem',
      fontWeight: 400,
      letterSpacing: '0em',
      lineHeight: 1.25,
    },
    h6: {
      fontFamily:
        'Source Sans Pro, Raleway, Roboto, Helvetica, Arial, sans-serif',
      fontSize: '1.25rem',
      fontWeight: 500,
      letterSpacing: '0.0075em',
      lineHeight: 1.25,
    },
    headline: {
      color: 'rgba(0, 0, 0, 0.87)',
      // fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      fontSize: '1.5rem',
      fontWeight: 400,
      lineHeight: '1.35417em',
    },
    subheading: {
      color: 'rgba(0, 0, 0, 0.87)',
      // fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '1.5em',
    },
    title: {
      color: 'rgba(0, 0, 0, 0.87)',
      // fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      fontSize: '1.3125rem',
      fontWeight: 500,
      lineHeight: '1.16667em',
    },
  },
  zIndex: {
    appBar: 1100,
    drawer: 1200,
    mobileStepper: 1000,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
}