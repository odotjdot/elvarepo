import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { motion, useAnimation } from 'framer-motion';
import { useInView, useInViewEffect } from 'react-hook-inview';

import { plainTextStyle } from './PlainTextStyle';

export default function PlainText({ text, type, color }) {
	const [isVisible, setIsVisible] = useState(false);
	const css = plainTextStyle();
	return (
		<Grid container className={css.paragraphContainer}>
			<Grid item sm={12}>
				<motion.div>
					<Typography
						variant={type || 'body1'}
						component='div'
						dangerouslySetInnerHTML={{ __html: text }}
						style={{ color: color }}
					/>
				</motion.div>
			</Grid>
		</Grid>
	);
}
