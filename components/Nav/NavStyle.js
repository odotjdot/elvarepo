import { makeStyles } from '@material-ui/core/styles';

export const navStyle = makeStyles((theme) => ({
	nav: {
		position: 'fixed',
		top: '0',
		// right: '-720px',
		zIndex: '99',
		width: '320px',
		height: '100vh',
		paddingLeft: theme.spacing(2),
		background: 'white',
		display: 'flex',
		alignItems: 'center',
		[theme.breakpoints.up('md')]: {
			width: '720px',
		},
	},
	navBg: {
		position: 'absolute',
		left: '0',
		top: '0',
		width: '100vw',
		height: '100vh',
		zIndex: '98',
		backgroundColor: 'rgba(0,0,0,.8)',
	},
	menu: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-evenly',
		height: '100vh',
	},
	navLinks: {
		width: '100%',
		overflow: 'hidden',
		display: 'block',
		position: 'relative',
		paddingRight: theme.spacing(3),
		'& a': {
			textDecoration: 'none',
		},
		[theme.breakpoints.up('md')]: {
			paddingLeft: '50px',
		},
	},
	navSubHead: {
		fontSize: '14px',
		fontWeight: '600',
		overflow: 'hidden',
		position: 'relative',
		[theme.breakpoints.up('sm')]: {
			fontSize: '24px',
		},
	},
	navContainer: {
		position: 'relative',
		// zIndex: '999',
	},
	navButton: {
		position: 'fixed',
		top: '30px',
		right: '30px',
		zIndex: '9999',
		mixBlendMode: 'difference',
		'& :hover': {
			cursor: 'pointer',
		},
	},
	// siteTitle: {
	// 	position: 'fixed',
	// 	top: '30px',
	// 	left: '30px',
	// 	fontSize: '104px',
	// 	mixBlendMode: 'difference',

	// 	color: 'white',
	// },
}));
