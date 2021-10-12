import { Builder } from '@builder.io/react';
import PartnersImages from './PartnersImages';

Builder.registerComponent(PartnersImages, {
	name: 'Elva Partners Images',
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
					name: 'partner',
					type: 'string',
				},
			],
		},
	],
});
