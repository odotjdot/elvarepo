import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export const partnersImagesStyle = makeStyles((theme) => ({
	container: {
		padding: '0px 25px',
	},
	grid: {
		padding: theme.spacing(0, 1),
	},
	img: {
		width: '124px',
		height: '124px',
	},
}));
