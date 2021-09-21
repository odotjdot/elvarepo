import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '../src/Link';

import { homeStyle } from '../components/Home/HomeStyle';
import Home from '../components/Home/Home';
import { builder } from '@builder.io/react';

// import '../components/Heading/Heading.builder';

builder.init('05a424031a374004925af5910eeeb3f4');

export const getStaticProps = async (context) => {
	const content = await builder
		.get('home-section', { url: context.resolvedUrl })
		.promise();
	return {
		props: { content },
		revalidate: true,
		notFound: !content,
	};
};

export default function Index(props) {
	const css = homeStyle();
	console.log('index props ', props);
	return (
		<>
			<Home props={props} />
		</>
	);
}
