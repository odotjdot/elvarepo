import { makeStyles } from '@material-ui/core/styles';

import { motion, useAnimation } from 'framer-motion';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export const homeWorkStyle = makeStyles((theme) => ({
	workContainer: {
		minHeight: '100vh',
	},
	backgroundContainer: {
		minHeight: '100vh',
		transform: 'scale(95%)',
	},
	workList: {
		paddingTop: '10vh',
		paddingBottom: '10vh',
		paddingLeft: theme.spacing(3),
		paddingRight: theme.spacing(3),
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
