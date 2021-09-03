import React from 'react';
import Link from 'next/link';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faInstagram,
	faLinkedin,
	faVimeoV,
	faSpotify,
} from '@fortawesome/free-brands-svg-icons';
// Styles
import { footerStyle } from './FooterStyle';

const socials = [
	{ icon: faLinkedin, url: 'https://twitter.com', id: 1 },
	{ icon: faInstagram, url: 'https://twitter.com', id: 2 },
	{ icon: faVimeoV, url: 'https://twitter.com', id: 3 },
	{ icon: faSpotify, url: 'https://spotify.com', id: 4 },
];

export default function Footer() {
	const classes = footerStyle();
	const theme = useTheme();
	const mobileWidth = useMediaQuery(theme.breakpoints.up('sm'));

	return (
		<div className={classes.footerContainer}>
			<Grid container>
				<Grid item sm={6}>
					<Typography variant='h3'>
						We love working with passionate people and brands.
					</Typography>
				</Grid>
				<Grid item container direction='column' sm={6} alignContent='flex-end'>
					{mobileWidth
						? socials?.map((node) => {
								return (
									<Grid key={node.id} item className={classes.footerIcons}>
										<a
											target='_blank'
											href={node.url}
											rel='noopener noreferrer'
										>
											<FontAwesomeIcon icon={node.icon} />
										</a>
									</Grid>
								);
						  })
						: null}
				</Grid>
			</Grid>
			<Grid container className={classes.footerBottomRow}>
				<Grid container item sm={8}>
					<Link href='/'>
						<Typography variant='body1' className={classes.footerLinks}>
							Let's collaborate
							<span className={classes.bottomArrow}>
								<svg
									width='20'
									height='20'
									viewBox='0 0 20 20'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M14.9559 6.31169L14.9498 5.04928L5.08386 5.01771L5.08989 6.88133L11.7246 6.90251L4.36434 14.2628L5.68606 15.5845L13.0973 8.17331L13.1188 14.9112L14.9834 14.9172L14.9559 6.31169Z'
										fill='white'
									/>
								</svg>
							</span>
						</Typography>
					</Link>
				</Grid>
				<Grid container item sm={4}>
					<Typography
						variant='body1'
						className={`${classes.footerLinks} ${classes.footerInfoLink}`}
					>
						info@helloelva.com
						<span className={classes.bottomArrow}>
							<svg
								width='20'
								height='20'
								viewBox='0 0 20 20'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M14.9559 6.31169L14.9498 5.04928L5.08386 5.01771L5.08989 6.88133L11.7246 6.90251L4.36434 14.2628L5.68606 15.5845L13.0973 8.17331L13.1188 14.9112L14.9834 14.9172L14.9559 6.31169Z'
									fill='white'
								/>
							</svg>
						</span>
					</Typography>
				</Grid>
			</Grid>

			{!mobileWidth ? (
				<Grid container className={classes.mobileSocials}>
					{socials?.map((node) => {
						return (
							<Grid key={node.id} item className={classes.footerMobileIcons}>
								<a target='_blank' href={node.url} rel='noopener noreferrer'>
									<FontAwesomeIcon icon={node.icon} />
								</a>
							</Grid>
						);
					})}
				</Grid>
			) : null}
		</div>
	);
}
