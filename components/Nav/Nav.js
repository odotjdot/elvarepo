import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

import { motion, useAnimation } from 'framer-motion';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { navStyle } from './NavStyle';

const menuItems = [
	{ name: 'Work', subHeader: '23 projects' },
	{
		name: 'Company',
		subHeader: 'About Us — Partners — Capabilities — Team — Values',
	},
	{ name: 'Contact', subHeader: 'Get In Touch' },
];

export default function Nav() {
	const [isMenuOpen, setIsMenuOpen] = useState('CLOSED');
	const css = navStyle();

	const isMobile = useMediaQuery('(max-width:600px)');

	const menuAnimation = {
		open: {
			right: '0px',
		},
		close: {
			right: isMobile ? '-320px' : '-720px',
		},
	};

	const menuTransition = {
		type: 'spring',
		damping: 60,
		mass: 2,
		stiffness: 500,
	};

	const navBgVars = {
		open: {
			opacity: 1,
			display: 'block',
		},
		closed: {
			opacity: 0,
			transitionEnd: {
				display: 'none',
			},
		},
	};

	const menuItemAni = {
		open: (i) => ({
			x: 0,
			opacity: 1,
			transition: {
				type: 'spring',
				damping: 90,
				mass: 2,
				stiffness: 500,
				delay: i * 0.1,
			},
		}),
		close: {
			x: 90,
			opacity: 0,
		},
	};

	const menuItemTrans = {
		// type: 'spring',
		// damping: 90,
		// mass: 2,
		// stiffness: 500,
		// delay: 0.1,
	};

	const menuItemSubAni = {
		open: (j) => ({
			x: 0,
			opacity: 1,
			transition: {
				type: 'tween',
				duration: 0.3,
				ease: [0.17, 0.67, 0.83, 0.67],
			},
		}),
		close: {
			x: 20,
			opacity: 0,
		},
	};

	const menuButtonAni = {
		open: {
			rotate: -135,
		},
		close: {
			rotate: 0,
		},
	};

	const menuButtonTrans = {
		type: 'spring',
		damping: 50,
		mass: 2,
		stiffness: 500,
	};

	const menuItemSubTrans = {};

	const menuControl = useAnimation();
	const menuItemControl = useAnimation();
	const menuItemSubControl = useAnimation();
	const menuButtonControl = useAnimation();

	const openMenu = () => {
		menuControl.start('open');
		menuItemControl.start('open');
		menuItemSubControl.start('open');
		menuButtonControl.start('open');
		setIsMenuOpen('OPEN');
	};

	const closeMenu = () => {
		menuControl.start('close');
		menuItemControl.start('close');
		menuItemSubControl.start('close');
		menuButtonControl.start('close');
		setIsMenuOpen('CLOSED');
	};

	const toggleOpen = () => {
		if (isMenuOpen === 'CLOSED') {
			openMenu();
		} else {
			closeMenu();
		}
	};

	return (
		<>
			<motion.div
				className={css.navBg}
				variants={navBgVars}
				initial='closed'
				animate={isMenuOpen === 'CLOSED' ? 'closed' : 'open'}
				onClick={closeMenu}
			/>
			<Grid container>
				<Grid item>
					<motion.div
						animate={menuButtonControl}
						transition={menuButtonTrans}
						variants={menuButtonAni}
						className={css.navButton}
						onClick={toggleOpen}
					>
						<svg
							width='32'
							height='32'
							viewBox='0 0 32 32'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<rect
								x='32'
								y='14'
								width='4'
								height='32'
								transform='rotate(90 32 14)'
								fill='white'
							/>
							<rect x='14' width='4' height='32' fill='white' />
						</svg>
					</motion.div>
				</Grid>
			</Grid>
			{/* <ClickAwayListener onClickAway={closeMenu}> */}
			<motion.div
				animate={menuControl}
				transition={menuTransition}
				variants={menuAnimation}
				initial='close'
				className={css.nav}
			>
				<motion.div className={css.menu}>
					{menuItems?.map((node, i, j) => {
						return (
							<motion.div
								custom={i}
								animate={menuItemControl}
								variants={menuItemAni}
								transition={menuItemTrans}
								initial='close'
								key={node.name}
								className={css.navLinks}
							>
								<Link href='/about'>
									<a onClick={closeMenu}>
										<Typography variant='h2'>{node.name}</Typography>
									</a>
								</Link>
								<motion.div
									custom={j}
									animate={menuItemSubControl}
									variants={menuItemSubAni}
									transition={menuItemSubTrans}
								>
									<Typography variant='body2' className={css.navSubHead}>
										{node.subHeader}
									</Typography>
								</motion.div>
							</motion.div>
						);
					})}
				</motion.div>
			</motion.div>
		</>
	);
}
