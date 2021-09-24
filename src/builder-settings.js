import { Builder, builder } from '@builder.io/react';

import '../components/Heading/Heading.builder';
import '../components/Paragraph/Paragraph.builder';
import '../components/Spacer/Spacer.builder';
import '../components/Slider/Slider.builder';

builder.init('05a424031a374004925af5910eeeb3f4');

Builder.register('insertMenu', {
	name: 'Elva Components',
	items: [
		{ name: 'Elva Heading' },
		{ name: 'Elva Paragraph' },
		{ name: 'Elva Spacer' },
		{ name: 'Elva Narrow Slider' },
	],
});
