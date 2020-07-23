import atomize from '@quarkly/atomize';

import defaults from './defaults';

export default atomize.u(
	{
		name: 'U',
		normalize: true,
		mixins: true,
		description: {
			en: 'Underline text',
			ru: 'Подчеркнутый текст',
		},
		propInfo: {},
	},
	defaults,
);
