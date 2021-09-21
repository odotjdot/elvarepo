import React from 'react';

import { motion, useAnimation } from 'framer-motion';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Slider from 'react-slick';
import SliderContainer from '../Slider/Slider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { partnerStyle } from './PartnerStyle';

export default function Partners() {
	const css = partnerStyle();
	return (
		<div className={css.partnerContainer}>
			<Typography variant='h1'>Partners</Typography>
			<Grid container>
				<Grid item md={9}>
					<Typography>
						Some brands we’ve made amazing work with. Lorem ipsum dolor sit
						amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
						ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
						nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat.{' '}
					</Typography>
				</Grid>
			</Grid>
			<SliderContainer />
		</div>
	);
}
