import atomize from '@quarkly/atomize';

import defaults from './defaults';

export default atomize.hr(
	{
		name: 'Hr',
		normalize: true,
		mixins: true,
		description: {
			en:
				'Hr element — horizontal line to separate content',
			ru:
				'Элемент hr — разделительная линия'
		},
		propInfo: {}
	},
	defaults,
);
