import { createTheme, makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: '#1E1E1E',
		},
		secondary: {
			main: '#1E1E1E',
		},
		error: {
			main: red.A400,
		},
		background: {
			default: '#1E1E1E',
		},
	},
	typography: {
		fontFamily: 'MessinaSans',
		// fontSize: '20px',
		fontWeightRegular: 600,
		body1: {
			fontSize: '20px',
		},
		h1: {
			fontFamily: 'MessinaSans',
			fontSize: '60px',
			fontWeight: '600',
			'@media (min-width:600px)': {
				fontSize: '148px',
			},
		},

		h2: {
			fontFamily: 'MessinaSans',
			fontSize: '40px',
			fontWeight: '600',
			'@media (min-width:600px)': {
				fontSize: '108px',
			},
		},
		h3: {
			fontFamily: 'MessinaSans',
			fontSize: '32px',
			fontWeight: '600',
			'@media (min-width:600px)': {
				fontSize: '60px',
			},
		},
		h4: {
			fontFamily: 'MessinaSans',
		},
		subtitle1: {
			fontSize: '18px',
			fontWeight: '600',
		},
		subtitle2: {
			fontSize: '20px',
			fontWeight: '600',
		},
		body1: {
			fontSize: '16px',
		},
		body2: {
			fontSize: '14px',
		},
	},
});

export default theme;
