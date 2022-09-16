import { createTheme } from '@mui/material';
import cyan from '@mui/material/colors/cyan';
import yellow from '@mui/material/colors/yellow';


export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: yellow[700],
      dark: yellow[800],
      light:yellow[500],
      contrastText:'#ffffff',

    },
    secondary: {
      main: cyan[500], 
      dark: cyan[400],
      light: cyan[300],
      contrastText:'#ffffff',
    },
    background:{
      default: '#202124',
      paper:'#303134',
    }
  }
    
});