import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export const HomeSectionStyle = makeStyles((theme) => ({
	homeSectionContainer: {
		background: 'white',
		padding: theme.spacing(10, 3),
	},
}));
