import { Builder } from '@builder.io/react';
import SliderTeam from './SliderTeam';

Builder.registerComponent(SliderTeam, {
	name: 'Elva Team Slider',
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
					name: 'name',
					type: 'string',
				},
				{
					name: 'position',
					type: 'string',
				},
			],
		},
	],
});
