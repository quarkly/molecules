import atomize from '@quarkly/atomize';

import defaults from './defaults';

export { defaults as defaultsText };

export default atomize.div(
	{
		name: 'Text',
		effects: {
			hover: ':hover',
		},
		normalize: true,
		mixins: true,
		description: {
			en: 'Text element — text in different variants: paragraph, heading, etc.',
			ru: 'Элемент text — текст в различных вариантах: параграф, заголовок, и другие',
		},
		propInfo: {
			as: {
				type: 'string',
				category: 'Main',
				control: 'select',
				variants: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div'],
			},
		},
	},
	defaults,
);
