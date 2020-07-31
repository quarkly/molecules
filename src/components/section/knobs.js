import { text } from '@storybook/addon-knobs';
import defaults from './defaults';
import getDefaultKnobs from '../../modules/knobs';

export default ({ 'inner-width': iw, 'inner-max-width': imaxw, 'inner-min-width': iminw }) => ({
	...getDefaultKnobs(defaults),

	'inner-width': text(
		'inner-width',
		iw && iw !== '--cmp-section-width-default' ? iw : '90%',
		'Props',
	),
	'inner-min-width': text(
		'inner-min-width',
		iminw && iminw !== '--cmp-section-minWidth-default' ? iminw : '300px',
		'Props',
	),
	'inner-max-width': text(
		'inner-max-width',
		imaxw && imaxw !== '--cmp-section-maxWidth-default' ? imaxw : '1280px',
		'Props',
	),
});
