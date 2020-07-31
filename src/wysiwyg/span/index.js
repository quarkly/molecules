import atomize from '@quarkly/atomize';

import defaults from './defaults';

export { defaults as defaultsSpan };

export default atomize.span(
	{
		name: 'Span',
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
				variants: ['span', 'label'],
			},
		},
	},
	defaults,
);
