import { createMuiTheme } from '@material-ui/core/styles'

const colors = {
  DARK: '#455264',
  BLACK: '#2A3749',
  BLUE:'#4364e8'
}

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.BLUE,
    },
    secondary: {
      main: colors.DARK
    }
  },
  typography: {
    h1: {
      fontFamily: "'Neuton', serif",
      fontSize: "48px",
      fontWeight: "bold"
    },
  }
});

export default theme;