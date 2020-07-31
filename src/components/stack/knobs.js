import { text } from '@storybook/addon-knobs';
import defaults from './defaults';
import getDefaultKnobs from '../../modules/knobs';

export default ({ gap }) => ({
	...getDefaultKnobs(defaults),

	gap: text('gap', gap && gap !== '--cmp-stack-gap-default' ? gap : '32px', 'Props'),
});
