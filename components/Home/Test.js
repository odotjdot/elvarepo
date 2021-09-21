import { builder, BuilderComponent } from '@builder.io/react';

builder.init('05a424031a374004925af5910eeeb3f4');

export const getStaticProps = async (context) => {
	console.log(context);
	const content = await builder
		.get('home-section', { url: context.resolvedUrl })
		.promise();

	return {
		props: { content },
		revalidate: true,
		notFound: !content,
	};
};

const MyComponent = (props) => (
	<BuilderComponent content={props.content} model='home-section' />
);

export default MyComponent;
