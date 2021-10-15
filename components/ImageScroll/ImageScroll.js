import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { motion, useAnimation } from 'framer-motion';
import { useInView, useInViewEffect } from 'react-hook-inview';

import { ImageScrollStyle } from './ImageScrollStyle';

export default function ImageScroll({ images, titleText, subtitleText }) {
	const css = ImageScrollStyle();

	return (
		<Container>
			<Grid container className={css.container}>
				<div className={css.textContainer}>
					<Typography
						variant='h3'
						dangerouslySetInnerHTML={{ __html: titleText }}
						component='div'
					/>

					<Typography
						variant='body1'
						dangerouslySetInnerHTML={{ __html: subtitleText }}
						component='div'
					/>
				</div>
				<div className={css.imageContainer}>
					<div className={css.imageWrapper}>
						{images?.map(({ image }) => {
							return (
								<div key={image} className={css.imageItem}>
									<img src={image} className={css.img} />
								</div>
							);
						})}
					</div>
				</div>
			</Grid>
		</Container>
	);
}
