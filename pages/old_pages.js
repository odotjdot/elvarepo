import React from 'react';
import { builder, BuilderComponent, Builder } from '@builder.io/react';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import Error from './_error';
import '../src/builder-settings';

// Add your public apiKey here
const YOUR_KEY = '05a424031a374004925af5910eeeb3f4';
builder.init(YOUR_KEY);

const MyComponent = (props) => (
	<>
		{/* <YourHeader /> */}
		{props.content || Builder.isPreviewing ? (
			<BuilderComponent content={props.content} model='page' />
		) : (
			<Error />
		)}
		{/* <YourFooter /> */}
	</>
);

export default MyComponent;

// Get page data
// https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
export const getStaticProps = async (context) => {
	const content = await builder
		.get('page', { url: context.resolvedUrl })
		.promise();

	return {
		props: { content },
		revalidate: true,
		notFound: !content,
	};
};

// List all Builder pages
// https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
export const getStaticPaths = async () => {
	const results = await builder.getAll('page', {
		fields: 'data.url',
		key: 'all-pages',
		limit: 200,
		options: {
			noTargeting: true,
		},
	});
	console.log(results);
	const paths = results.map((item) => ({
		params: {
			pages: [item.data.url.substr(1)], // Remove preceeding slash
		},
	}));

	console.log(paths);

	return {
		paths: paths,
		fallback: true,
	};
};
