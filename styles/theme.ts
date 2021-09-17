import { createTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createTheme({
    palette: {
        common: {
            black: '#19192B',
            white: '#ffffff',
        },
        primary: {
            light: '#ae90ef',
            main: '#703ec2',
            dark: '#4b04bb',
            contrastText: '#e8e8e8',
        },
        secondary: {
            main: '#6b608b', // omitting light and dark will calculate from main
            contrastText: '#757575',
        },
        grey: {
            '500': '#bcbcbc',
            '700': '#79797a',
        },
        info: {
            main: '#511bf1',
        },
        success: {
            main: '#00d589',
        },
        error: {
            main: '#832838',
        },
        background: {
            default: '#fff',
        },
    },
    typography: {
        fontFamily: 'Roboto',
    },
});

export default theme;

