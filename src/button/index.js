import atomize from '@quarkly/atomize';

import defaults from './defaults';

export default atomize.button(
	{
		name: 'Button',
		effects: {
			hover: ':hover',
			focus: ':focus',
			active: ':active',
			disabled: ':disabled',
		},
		description: {
			en:
				'button element — button that performs an action. For example, can be used in forms to submit data',
			ru:
				'Элемент button — кнопка, которая выполняет какое-либо действие. Например, отправка данных формы',
		},
		propInfo: {
			type: {
				control: 'select',
				variants: ['submit', 'button'],
				category: 'Main',
			},
			disabled: {
				control: 'checkbox',
				category: 'Main',
			},
		},
	},
	defaults,
);
