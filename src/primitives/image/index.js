import atomize from '@quarkly/atomize';

import defaults from './defaults';

export default atomize.img(
	{
		name: 'Image',
		effects: {
			hover: ':hover',
		},
		normalize: true,
		mixins: true,
		description: {
			en: 'Image element — image',
			ru: 'Элемент image — изображение',
		},
		propInfo: {
			src: {
				control: 'image',
				type: 'string',
				description: {
					en: 'src — image address',
					ru: 'src — aдрес изображения',
				},
				category: 'Main',
				weight: 1,
			},
			alt: {
				control: 'input',
				type: 'string',
				category: 'Main',
				weight: 1,
			},
			title: {
				control: 'input',
				type: 'string',
				category: 'Main',
				weight: 1,
			},
		},
	},
	defaults,
);
