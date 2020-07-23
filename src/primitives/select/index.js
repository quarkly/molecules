import atomize from '@quarkly/atomize';

import defaults from './defaults';

export default atomize.select(
	{
		name: 'Select',
		effects: {
			hover: ':hover',
			focus: ':focus',
		},
		normalize: true,
		mixins: true,
		description: {
			en: 'Select element — drop-drown list that allows choosing one value from a list',
			ru: 'Элемент select — выпадающий список с возможностью выбора варианта',
		},
		propInfo: {},
	},
	defaults,
);
