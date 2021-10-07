import React from 'react';

import { motion, useAnimation } from 'framer-motion';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { sliderTeamStyle } from './SliderTeamStyle';

export default function SliderTeam(props) {
	const { items, color } = props;
	const css = sliderTeamStyle();
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		easing: 'easeOut',
		variableWidth: true,
		className: `${css.itemContainer}`,
	};
	return (
		<div>
			<Slider {...settings}>
				{items?.map(({ image, name, position }) => {
					return (
						<div key={name} className={css.itemContainer}>
							<div className={css.itemImageContainer}>
								<img src={image} />
							</div>
							<div className={css.itemName} style={{ color: color }}>
								{name} - {position}
							</div>
						</div>
					);
				})}
			</Slider>
		</div>
	);
}
