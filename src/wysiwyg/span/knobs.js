import { select } from '@storybook/addon-knobs';

import getDefaultKnobs from '../../modules/knobs';
import defaults from './defaults';

export default (props = {}) => ({
	...getDefaultKnobs(defaults),

	as: select(
		'as',
		{
			span: 'span',
			label: 'label',
		},
		props.as || 'span',
		'Props',
	),
});
