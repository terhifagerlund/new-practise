import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#FFD43D',
      }
    },
    typography: {
        h2: {
            fontFamily: "Varela Round",
            fontSize: 30,
            fontWeight: "bold",
        },
        h3: {
            fontFamily: "Varela Round",
            fontSize: 20,
            fontWeight: "bold",
        },
       h4: {
           fontFamily: "Varela Round",
           fontSize: 48,
           fontWeight: "bold",
        },        
        body1: {
            fontFamily: 'Roboto',
            fontSize: 15,
        },
        body2: {
            fontFamily: 'Roboto',
            fontSize: 22,
        },   
        button: {
            fontFamily: "Varela Round",
            fontSize: 20,
            fontWeight: "bold",
        },
    }
  });

  export default theme;