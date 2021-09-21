import React from 'react';
import Typography from '@material-ui/core/Typography';
import { motion, useAnimation } from 'framer-motion';
import { useInView, useInViewEffect } from 'react-hook-inview';

export default function Heading({ title, type }) {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<motion.div>
			<Typography variant={type || 'h1'}>{title}</Typography>
		</motion.div>
	);
}
