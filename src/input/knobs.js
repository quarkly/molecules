import { select, text, boolean } from '@storybook/addon-knobs';
import defaults from './defaults';
import getDefaultKnobs from '../modules/knobs';

export default (props = {}) => ({
	...getDefaultKnobs(defaults),

	name: text('name', props.name || '', 'Props'),
	type: select(
		'type',
		{
			text: 'text',
			email: 'email',
			tel: 'tel',
			date: 'date',
			number: 'number',
			file: 'file',
			search: 'search',
		},
		props.type || 'text',
		'Props',
	),
	placeholder: text('placeholder', props.placeholder || '', 'Props'),
	defaultValue: text('defaultValue', props.defaultValue || '', 'Props'),
	required: boolean('required', props.required || false, 'Props'),
	disabled: boolean('disabled', props.disabled || false, 'Props'),
	as: select(
		'as',
		{
			submit: 'input',
			button: 'textarea',
		},
		props.as || 'input',
		'Props',
	),
});
