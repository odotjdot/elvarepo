import { makeStyles } from '@material-ui/core/styles';

export const footerStyle = makeStyles((theme) => ({
	footerContainer: {
		color: '#ffffff',
		backgroundColor: '#1f1f1f',
		padding: theme.spacing(1),
		[theme.breakpoints.up('sm')]: {
			padding: theme.spacing(4),
		},
	},
	footerBottomRow: {
		// flexDirection: 'column',
		[theme.breakpoints.up('sm')]: {
			// flexDirection: 'row',
			height: '30vh',
			alignItems: 'flex-end',
		},
		[theme.breakpoints.down('sm')]: {
			paddingTop: theme.spacing(5),
		},
	},
	footerIcons: {
		fontSize: '20px',
		marginBottom: theme.spacing(2),
		'& a': {
			color: '#ffffff',
		},
	},
	footerMobileIcons: {
		fontSize: '20px',
		marginRight: theme.spacing(2),
		'& a': {
			color: '#ffffff',
		},
	},
	mobileSocials: {
		paddingTop: theme.spacing(20),
	},
	footerLinks: {
		fontWeight: '600',
		fontSize: '20px',
	},
	footerInfoLink: {
		textAlign: 'left',
		[theme.breakpoints.up('sm')]: {
			textAlign: 'right',
			display: 'block',
			width: '100%',
		},
		[theme.breakpoints.down('sm')]: {
			paddingTop: theme.spacing(2),
		},
	},
	bottomArrow: {
		verticalAlign: 'middle',
		top: '3px',
		position: 'relative',
		paddingLeft: theme.spacing(1),
	},
}));
