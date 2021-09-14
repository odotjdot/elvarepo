import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export const brandsStyle = makeStyles((theme) => ({
	brandsContainer: {
		background: 'white',
		paddingTop: theme.spacing(10),
		paddingBottom: theme.spacing(10),
		paddingLeft: theme.spacing(3),
		paddingRight: theme.spacing(3),
	},
}));
