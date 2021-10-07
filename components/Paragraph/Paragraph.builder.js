import { Builder } from '@builder.io/react';
import Paragraph from './Paragraph';

Builder.registerComponent(Paragraph, {
	name: 'Elva Paragraph',

	inputs: [
		{
			type: 'richText',
			name: 'text',
			required: true,
			defaultValue: 'Content Goes Here!',
		},
		{
			type: 'string',
			name: 'color',
			enum: [
				{
					label: 'Black',
					value: '#000',
				},
				{
					label: 'White',
					value: '#fff',
				},
			],
			defaultValue: '#000',
		},
	],
});
