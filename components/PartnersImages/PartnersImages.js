import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { motion, useAnimation } from 'framer-motion';
import { useInView, useInViewEffect } from 'react-hook-inview';

import { partnersImagesStyle } from './PartnersImagesStyle';

export default function PartnersImages({ items }) {
	const css = partnersImagesStyle();

	return (
		<Grid container className={css.container}>
			{items?.map(({ image, name }) => {
				return (
					<Grid item sm={2} xs={4} className={css.grid} key={name}>
						<img src={image} className={css.img} />
					</Grid>
				);
			})}
		</Grid>
	);
}
