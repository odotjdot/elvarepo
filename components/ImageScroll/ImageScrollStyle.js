import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export const ImageScrollStyle = makeStyles((theme) => ({
	container: {
		// padding: '0px 25px',
		minHeight: '100vh',
		position: 'relative',
	},
	grid: {
		// padding: theme.spacing(0, 1),
	},
	img: {
		width: '100%',
		height: '424px',
	},
	textContainer: {
		minHeight: '100vh',
		width: '50%',
		// display: 'flex',
		// flexDirection: 'column',
		position: 'sticky',
		top: '0',
		// alignItems: 'center',
		// justifyContent: 'center',
	},
	imageContainer: {
		minHeight: '100vh',
		width: '25%',
	},
	imageWrapper: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
	},
	imageItem: {
		minHeight: '100vh',
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
}));
