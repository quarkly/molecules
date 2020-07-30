import atomize from '@quarkly/atomize';

import defaults from './defaults';

export { defaults as defaultsLine };

export default atomize.hr(
	{
		name: 'Line',
		normalize: true,
		mixins: true,
		description: {
			en: 'Line element — horizontal line to separate content',
			ru: 'Элемент line — разделительная линия',
		},
		propInfo: {},
	},
	defaults,
);
