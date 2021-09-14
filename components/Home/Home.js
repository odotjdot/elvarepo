import React from 'react';

import { motion, useAnimation } from 'framer-motion';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import HomeWork from './HomeWork';
import Partners from './Partners';
import Brands from './Brands';

import { homeStyle } from './HomeStyle';

export default function Home() {
	const css = homeStyle();

	return (
		<div>
			<HomeWork />
			<Partners />
			<Brands />
		</div>
	);
}
