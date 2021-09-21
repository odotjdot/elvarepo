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

import { sliderStyle } from './SliderStyle';

const data = [
	{
		name: 'Cravings',
		text:
			'Chrisy Tiegen’s team brought us in to help with transistion from Salesforce to Shopify. We were able to build an incredible partnership with them as a whole.',
	},
	{
		name: 'Burton',
		text:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
	},
	{
		name: 'Anastasia',
		text:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
	},
	{
		name: 'Coolhaus',
		text:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
	},
	{
		name: 'Haleys Beauty',
		text:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
	},
	{
		name: 'Fox Racing',
		text:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
	},
	{
		name: 'Hershel',
		text:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
	},
];
export default function SliderContainer() {
	const css = sliderStyle();
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
		// centerMode: true,
		className: `${css.itemContainer}`,
	};
	return (
		<div>
			<Slider {...settings}>
				{data.map(({ name, text }) => {
					return (
						<div key={name} className={css.itemContainer}>
							<div className={css.itemHeader}>{name}</div>
							<div className={css.itemText}>{text}</div>
						</div>
					);
				})}
			</Slider>
		</div>
	);
}
