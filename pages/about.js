import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from '../src/Link';

import { homeStyle } from '../components/Home/HomeStyle';

export default function About() {
	const css = homeStyle();

	return (
		<Container maxWidth='sm' className={css.homeBody}>
			<Box my={4}>
				<Typography variant='h4' component='h1' gutterBottom>
					ABOUT PAGE
				</Typography>
				<Button variant='contained' component={Link} naked href='/'>
					Go to the main page
				</Button>
			</Box>
		</Container>
	);
}
