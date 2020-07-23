import { select } from '@storybook/addon-knobs';
import defaults from './defaults';
import getDefaultKnobs from '../../modules/knobs';

export default (props = {}) => ({
	...getDefaultKnobs(defaults),

	as: select(
		'as',
		{
			article: 'article',
			aside: 'aside',
			blockquote: 'blockquote',
			div: 'div',
			figcaption: 'figcaption',
			figure: 'figure',
			footer: 'footer',
			header: 'header',
			hgroup: 'hgroup',
			main: 'main',
			nav: 'nav',
			section: 'section',
		},
		props.as || 'div',
		'Props',
	),
});
