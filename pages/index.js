import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '../src/Link';

import { homeStyle } from '../components/Home/HomeStyle';
import Home from '../components/Home/Home';

export default function Index() {
	const css = homeStyle();

	return (
		<>
			<Home />
		</>
	);
}
