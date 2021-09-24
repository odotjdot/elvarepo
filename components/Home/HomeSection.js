import React, { useContext } from 'react';
import { BuilderComponent } from '@builder.io/react';
import { HomeSectionStyle } from './HomeSectionStyle';

import { HomeSectionContext } from '../../src/contexts/HomeSectionContext';

export default function HomeSection() {
	const css = HomeSectionStyle();
	const props = useContext(HomeSectionContext);

	return (
		<div className={css.homeSectionContainer}>
			<BuilderComponent content={props.content} model='home-section' />
		</div>
	);
}
