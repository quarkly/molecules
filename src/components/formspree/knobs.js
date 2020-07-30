import { text } from '@storybook/addon-knobs';
import defaults from './defaults';
import getDefaultKnobs from '../../modules/knobs';

export default (props = {}) => ({
	...getDefaultKnobs(defaults),

	endpoint: text('endpoint', props.endpoint || defaults.endpoint, 'Props'),
	completeText: text('completeText', props.completeText || defaults.completeText, 'Props'),
	errorMessage: text('errorMessage', props.errorMessage || defaults.errorMessage, 'Props'),
});
