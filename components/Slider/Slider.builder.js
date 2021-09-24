import { Builder } from '@builder.io/react';
import SliderNarrow from './Slider';

Builder.registerComponent(SliderNarrow, {
	name: 'Elva Narrow Slider',
	inputs: [
		{
			type: 'list',
			name: 'items',
			subFields: [
				{
					name: 'image',
					type: 'file',
					allowedFileTypes: ['jpeg', 'jpg', 'png', 'gif', 'svg'],
					required: true,
				},
				{
					name: 'text',
					type: 'richText',
				},
			],
		},
	],
});
