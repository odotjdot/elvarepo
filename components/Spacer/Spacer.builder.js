import { Builder } from '@builder.io/react';
import Spacer from './Spacer';

Builder.registerComponent(Spacer, {
	name: 'Elva Spacer',

	inputs: [
		{
			type: 'string',
			name: 'marginTop',
			required: false,
			defaultValue: '0',
		},
		{
			type: 'string',
			name: 'marginBottom',
			required: false,
			defaultValue: '0',
		},
	],
});
