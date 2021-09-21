import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
	motion,
	useAnimation,
	useTransform,
	useViewportScroll,
} from 'framer-motion';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { homeWorkStyle } from './HomeWorkStyle';

const workListItems = [
	{
		name: 'Cravings',
	},
	{ name: 'Hershel Supply Co' },
	{ name: 'Coolhaus' },
	{ name: 'Haleys Beauty' },
	{ name: 'Fox Racing' },
];

export default function HomeWork() {
	const css = homeWorkStyle();
	const { scrollY } = useViewportScroll();
	const scale = useTransform(scrollY, [138, 0], [30, 138], [0.42, 0, 0.58, 1]);
	// console.log(scale);
	return (
		<div className={css.workContainer}>
			<motion.div
				className={css.backgroundContainer}
				layout
				style={{ transform: scale }}
			>
				<Image
					src='/static/imgs/cravings.jpg'
					layout='fill'
					objectFit='cover'
				/>
			</motion.div>
			<Grid container className={css.workList}>
				<Grid item container>
					{workListItems.map((item) => {
						return (
							<Typography
								key={item.name}
								variant='h2'
								className={css.workListItems}
							>
								<Link href='/'>
									<a>{item.name}</a>
								</Link>
							</Typography>
						);
					})}
					<Typography variant='h2' className={css.workListItems}>
						<Link href='/'>
							<a>View all projects</a>
						</Link>
					</Typography>
				</Grid>
			</Grid>
		</div>
	);
}
