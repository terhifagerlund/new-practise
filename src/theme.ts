import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#FFD43D',
      }
    },
    typography: {
       h4: {
           fontFamily: "Varela Round",
           fontSize: 48,
        },        
        body1: {
            fontFamily: "Roboto",
            fontSize: 22,
        },
        button: {
            fontFamily: "Varela Round",
            fontSize: 20,
        }
    }
  });

  export default theme;