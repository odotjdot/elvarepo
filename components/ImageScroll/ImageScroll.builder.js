import { Builder } from '@builder.io/react';
import ImageScroll from './ImageScroll';

Builder.registerComponent(ImageScroll, {
	name: 'Elva Image Scroll',
	inputs: [
		{
			type: 'richText',
			name: 'titleText',
			required: true,
			defaultValue: 'Title text goes here!',
		},
		{
			type: 'richText',
			name: 'subtitleText',
			defaultValue: 'Subtitle text go here!',
		},
		{
			type: 'list',
			name: 'images',
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
