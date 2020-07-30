import atomize from '@quarkly/atomize';

import defaults from './defaults';

export { defaults as defaultsOption };

export default atomize.option(
	{
		name: 'Option',
		effects: {
			hover: ':hover',
		},
		normalize: true,
		mixins: true,
		description: {
			en: 'Option — variant for the select element',
			ru: 'Элемент option — вариант для элемента select',
		},
		propInfo: {},
	},
	defaults,
);
