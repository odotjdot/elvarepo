import { Builder } from '@builder.io/react';
import PlainText from './PlainText';

Builder.registerComponent(PlainText, {
	name: 'Elva Plain Text',

	inputs: [
		{
			type: 'richText',
			name: 'text',
			required: true,
			defaultValue: 'Content Goes Here!',
		},
		{
			type: 'string',
			name: 'type',
			enum: [
				{
					label: 'Body 1',
					value: 'body1',
				},
				{
					label: 'Body 2',
					value: 'body2',
				},
				{
					label: 'Subtitle 1',
					value: 'subtitle1',
				},
				{
					label: 'Subtitle 2',
					value: 'subtitle2',
				},
			],
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
