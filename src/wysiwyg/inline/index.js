import atomize from '@quarkly/atomize';

import defaults from './defaults';

export { defaults as defaultsInline };

export default atomize.span(
	{
		name: 'Inline',
		inline: true,
		description: {
			en: 'Inline - child element of text for deep customization',
			ru: 'Элемент inline - дочерний элемент текста, для глубокой кастомизации',
		},
		propInfo: {},
	},
	defaults,
);
