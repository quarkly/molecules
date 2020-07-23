import atomize from '@quarkly/atomize';

import defaults from './defaults';

export default atomize.input(
	{
		name: 'Input',
		effects: {
			hover: ':hover',
			focus: ':focus',
			disabled: ':disabled',
		},
		description: {
			en: 'Input element',
			ru: 'Input element',
		},
		propInfo: {
			name: {
				control: 'input',
				type: 'string',
				category: 'Main',
			},
			type: {
				control: 'select',
				type: 'string',
				variants: ['text', 'email', 'tel', 'date', 'number', 'file', 'search'],
				category: 'Main',
			},
			placeholder: {
				control: 'input',
				type: 'string',
				category: 'Main',
			},
			defaultValue: {
				control: 'input',
				type: 'string',
				category: 'Main',
			},
			required: {
				control: 'checkbox',
				type: 'boolean',
				category: 'Main',
			},
			disabled: {
				control: 'checkbox',
				type: 'boolean',
				category: 'Main',
			},
			as: {
				control: 'select',
				type: 'string',
				variants: ['input', 'textarea'],
				category: 'Main',
			},
		},
	},
	defaults,
);
