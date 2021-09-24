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
	],
});
