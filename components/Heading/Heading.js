import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { motion, useAnimation } from 'framer-motion';
import { useInView, useInViewEffect } from 'react-hook-inview';

import { headingStyle } from './HeadingStyle';

export default function Heading({ text, type }) {
	const [isVisible, setIsVisible] = useState(false);
	const css = headingStyle();
	return (
		<motion.div>
			<Grid container className={css.headingContainer}>
				<Grid item>
					<Typography variant={type || 'h1'}>{text}</Typography>
				</Grid>
			</Grid>
		</motion.div>
	);
}
