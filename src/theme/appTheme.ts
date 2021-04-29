import { createMuiTheme, Theme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import lightBlue from '@material-ui/core/colors/lightBlue';

// define light theme colors
export const darkTheme: Theme = createMuiTheme({
    palette: {
        type: "light",
        primary: {
            main: blue[800],
        },
        secondary: {
            main: lightBlue[300],
        },
    },
});

// define dark theme colors
export const lightTheme: Theme = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            main: lightBlue[300],
        },
        secondary: {
            main: blue[800],
        },
    },
});