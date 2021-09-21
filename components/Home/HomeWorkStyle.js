import { makeStyles } from '@material-ui/core/styles';

export const homeWorkStyle = makeStyles((theme) => ({
	workContainer: {
		minHeight: '100vh',
		position: 'relative',
	},
	backgroundContainer: {
		minHeight: '100vh',
		width: '100%',
		transform: 'scale(96%)',
		position: 'absolute',
		top: '0',
		left: '0',
	},
	workList: {
		paddingTop: '100vh',
		paddingBottom: '10vh',
		paddingLeft: theme.spacing(3),
		paddingRight: theme.spacing(3),
		position: 'relative',
		zIndex: '2',
	},
	workListItems: {
		width: '100%',
		'& a': {
			opacity: '0.6',
			color: 'white',
			transition: 'all 0.5s',
		},
		'& a:hover': {
			opacity: '1',
		},
	},
}));
