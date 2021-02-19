import { createMuiTheme } from '@material-ui/core/styles';

import colors from './colors'

export default createMuiTheme({
  palette: {
    primary: {
      main: colors.primary,
      dark: colors.primaryDark,
      contrastText: colors.textLight,
    },
    secondary: {
      main: colors.secondary,
      dark: colors.secondaryDark,
      contrastText: colors.textDark,
    },
    error: {
      main: colors.error,
    }
  },
  typography: {
    fontFamily: 'BenchNine',
    button: {
      textTransform: 'none',
      fontSize: 18,
    },
  },
  overrides: {
    MuiFormControlLabel: {
      label: {
        color: colors.gray,
        fontStyle: 'normal',
      },
    },
    MuiCheckbox: {
      colorPrimary: {
        color: colors.gray,
      },
    },
    MuiButton: {
      root: {
        borderRadius: 8,
      },
    },
  }
});
