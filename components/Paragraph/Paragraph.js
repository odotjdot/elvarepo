import React from 'react';
import Typography from '@material-ui/core/Typography';
import { motion, useAnimation } from 'framer-motion';
import { useInView, useInViewEffect } from 'react-hook-inview';

export default function Paragraph({ text }) {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<motion.div>
			<Typography>
				<div dangerouslySetInnerHTML={{ __html: text }} />
			</Typography>
		</motion.div>
	);
}
