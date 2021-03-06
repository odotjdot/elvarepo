import { Builder } from '@builder.io/react';
import Heading from './Heading';

Builder.registerComponent(Heading, {
	name: 'Elva Heading',

	inputs: [
		{
			type: 'string',
			name: 'text',
			required: true,
			defaultValue: 'Hello there!',
		},
		{
			type: 'string',
			name: 'type',
			required: true,
			enum: [
				{
					lable: 'Heading 1',
					value: 'h1',
				},
				{
					lable: 'Heading 2',
					value: 'h2',
				},
				{
					lable: 'Heading 3',
					value: 'h3',
				},
				{
					lable: 'Heading 4',
					value: 'h4',
				},
				{
					lable: 'Heading 5',
					value: 'h5',
				},
			],
			defaultValue: 'h1',
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
