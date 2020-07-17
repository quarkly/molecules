import defaults from './defaults';
import getDefaultKnobs from '../modules/knobs';

import { select, boolean } from '@storybook/addon-knobs';

export default (props = {}) => ({
    ...getDefaultKnobs(defaults),

    type: select(
		'type',
		{
			'submit': 'submit',
			'button': 'button',
		},
		props.type || 'submit',
		'Props'
    ),
    disabled: boolean('disabled', props.disabled || false, 'Props'),
});
