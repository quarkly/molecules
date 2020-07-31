import { text, select } from '@storybook/addon-knobs';
import defaults from './defaults';
import getDefaultKnobs from '../../modules/knobs';

export default (props = {}) => ({
	...getDefaultKnobs(defaults),

	href: text('href', props.href || '#', 'Props'),
	target: select(
		'target',
		{
			'–': '',
			'_self': '_self',
			'_blank': '_blank',
			'_parent': '_parent',
			'_top': '_top',
		},
		props.target || '–',
		'Props',
	),
});
