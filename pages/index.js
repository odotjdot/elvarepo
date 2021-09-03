import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '../src/Link';

import { homeStyle } from '../components/Home/HomeStyle';

export default function Index() {
	const css = homeStyle();

	return (
		<Container className={css.homeBody} maxWidth='sm'>
			<Box my={4}>
				<Typography variant='h4' component='h1' gutterBottom>
					Next.js Prototype
				</Typography>
				<Link href='/about' color='secondary'>
					Go to the about page
				</Link>
			</Box>
		</Container>
	);
}