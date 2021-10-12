import { Builder, builder } from '@builder.io/react';

import '../components/Heading/Heading.builder';
import '../components/Paragraph/Paragraph.builder';
import '../components/PlainText/PlainText.builder';
import '../components/Spacer/Spacer.builder';
import '../components/Slider/Slider.builder';
import '../components/Slider/SliderTeam.builder';
import '../components/PartnersImages/PartnersImages.builder';

builder.init('05a424031a374004925af5910eeeb3f4');

Builder.register('insertMenu', {
	name: 'Elva Components',
	items: [
		{ name: 'Elva Heading' },
		{ name: 'Elva Paragraph' },
		{ name: 'Elva Plain Text' },
		{ name: 'Elva Spacer' },
		{ name: 'Elva Narrow Slider' },
		{ name: 'Elva Team Slider' },
		{ name: 'Elva Partners Images' },
	],
});
