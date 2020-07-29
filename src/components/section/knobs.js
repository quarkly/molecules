import { text } from '@storybook/addon-knobs';
import defaults from './defaults';
import getDefaultKnobs from '../../modules/knobs';

export default (props = {}) => ({
	...getDefaultKnobs(defaults),

	'inner-width': text('inner-width', props['inner-width'] || defaults['inner-width'], 'Props'),
	'inner-min-width': text(
		'inner-min-width',
		props['inner-min-width'] || defaults['inner-min-width'],
		'Props',
	),
	'inner-max-width': text(
		'inner-max-width',
		props['inner-max-width'] || defaults['inner-max-width'],
		'Props',
	),
});
