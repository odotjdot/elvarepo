import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export const paragraphStyle = makeStyles((theme) => ({
	paragraphContainer: {
		background: 'white',
		padding: theme.spacing(0, 4),
	},
}));
