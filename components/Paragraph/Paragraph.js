import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { motion, useAnimation } from 'framer-motion';
import { useInView, useInViewEffect } from 'react-hook-inview';

import { paragraphStyle } from './ParagraphStyle';

export default function Paragraph({ text, color }) {
	const [isVisible, setIsVisible] = useState(false);
	const css = paragraphStyle();
	return (
		<Grid container className={css.paragraphContainer}>
			<Grid item sm={10}>
				<motion.div>
					<Typography
						component='div'
						dangerouslySetInnerHTML={{ __html: text }}
						style={{ color: color }}
					/>
				</motion.div>
			</Grid>
		</Grid>
	);
}
