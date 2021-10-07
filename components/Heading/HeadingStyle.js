import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export const headingStyle = makeStyles((theme) => ({
	headingContainer: {
		// mixBlendMode: 'difference',
		// color: 'white',
		padding: theme.spacing(0, 3),
	},
}));
