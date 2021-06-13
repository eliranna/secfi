import { createMuiTheme } from '@material-ui/core/styles'

const colors = {
  DARK: '#455264',
  BLACK: '#2A3749',
  BLUE:'#4364e8'
}

export const theme = createMuiTheme({
  primary: "#90caf9",
  secondary: "#4364e8",
  palette: {
    primary: {
      main: colors.DARK,
    },
    secondary: {
      main: colors.BLUE
    }
  },
  typography: {
    h1: {
      fontFamily: "'Neuton', serif",
      fontSize: "48px",
      fontWeight: "bold"
    },
  },
  //custom: {}
});

export default theme;