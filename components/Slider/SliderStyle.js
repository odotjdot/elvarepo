import { makeStyles } from '@material-ui/core/styles';

import { motion, useAnimation } from 'framer-motion';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export const sliderStyle = makeStyles((theme) => ({
	sliderContainer: {
		position: 'relative',
	},
	itemContainer: {
		padding: theme.spacing(2, 0),
		'& .slick-slide': {
			width: '260px',
			margin: theme.spacing(0, 4),
			'& img': {
				width: '100%',
			},
		},
		'& .slick-list': {
			paddingLeft: theme.spacing(4),
		},
	},
	itemHeader: {
		height: '260px',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	itemText: {},
}));
