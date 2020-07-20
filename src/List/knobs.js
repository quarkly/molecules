import defaults from './defaults';
import getDefaultKnobs from '../modules/knobs';

import { select } from '@storybook/addon-knobs';

export default (props = {}) => ({
    ...getDefaultKnobs(defaults),

	as: select(
		'as',
		{
			'ul': 'ul',
			'ol': 'ol'
		},
		props.as || 'ul',
		'Props'
	),
	'list-style-type': select(
		'list-style-type',
		{
			'–': '',
			'circle': 'circle',
			'disc': 'disc',
			'square': 'square',
			'armenian': 'armenian',
			'decimal': 'decimal',
			'decimal-leading-zero': 'decimal-leading-zero',
			'georgian': 'georgian',
			'lower-alpha': 'lower-alpha',
			'lower-greek': 'lower-greek',
			'lower-latin': 'lower-latin',
			'lower-roman': 'lower-roman',
			'upper-alpha': 'upper-alpha',
			'upper-latin': 'upper-latin',
			'upper-roman': 'upper-roman',
			'none': 'none',
			'inherit': 'inherit',
			'initial': 'initial',
			'unset': 'unset'
		},
		props['list-style-type'] || '',
		'Props'
	),
});
