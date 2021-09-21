import React from 'react';
import { builder, BuilderComponent, Builder } from '@builder.io/react';

import { motion, useAnimation } from 'framer-motion';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import HomeWork from './HomeWork';
import Partners from './Partners';
import Brands from './Brands';
import Test from './Test';

import { homeStyle } from './HomeStyle';

// builder.init('05a424031a374004925af5910eeeb3f4');

// export const getStaticProps = async (context) => {
// 	const content = await builder
// 		.get('home-section', { url: context.resolvedUrl })
// 		.promise();
// 	console.log('get static props ', content);
// 	return {
// 		props: { content },
// 		revalidate: true,
// 		notFound: !content,
// 	};
// };

export default function Home({ props }) {
	// console.log('props +++', props);
	const css = homeStyle();

	return (
		<div>
			<HomeWork />
			<BuilderComponent content={props.content} model='home-section' />
			<Partners />

			<Brands />
		</div>
	);
}
