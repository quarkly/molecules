import { text } from '@storybook/addon-knobs';
import defaults from './defaults';
import getDefaultKnobs from '../../modules/knobs';

export default (props = {}) => ({
	...getDefaultKnobs(defaults),

	apiKey: text('apiKey', props.apiKey || 'none', 'Props'),
	query: text('query', props.query || 'none', 'Props'),
});
