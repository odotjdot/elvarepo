import React from 'react';

import { motion, useAnimation } from 'framer-motion';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { brandsStyle } from './BrandsStyle';

export default function Brands() {
	const css = brandsStyle();

	return (
		<div className={css.brandsContainer}>
			<Typography variant='h1'>Brand + Ecommerce</Typography>
			<Grid container>
				<Grid item md={9}>
					<Typography>
						We create an awe-inspiring digital experiences to facilitates a
						deeper connection between brands and people through brilliant design
						and thoughtful ux and motion. With 30+ years of combined experience
						in brand development and a specialization in e-commerce, we have the
						expertise and best practices to bring every brand into the digital
						space that actually moves the needle.
					</Typography>
				</Grid>
			</Grid>
		</div>
	);
}
