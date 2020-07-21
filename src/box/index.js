import atomize from '@quarkly/atomize';

import defaults from './defaults';

export default atomize.div(
	{
		name: 'Box',
		effects: {
			hover: ':hover',
		},
		normalize: true,
		mixins: true,
		description: {
			en: 'Box element — auxiliary container with arbitrary sizes for different tasks',
			ru:
				'Элемент box — вспомогательный контейнер с произвольными размерами для различных задач',
		},
		propInfo: {
			as: {
				type: 'string',
				category: 'Main',
				control: 'select',
				variants: [
					'article',
					'aside',
					'blockquote',
					'div',
					'figcaption',
					'figure',
					'footer',
					'header',
					'hgroup',
					'main',
					'nav',
					'section',
				],
			},
		},
	},
	defaults,
);
