import { text, boolean } from '@storybook/addon-knobs';
import defaults from './defaults';
import getDefaultKnobs from '../../modules/knobs';

export default (props = {}) => ({
	...getDefaultKnobs(defaults),

	src: text('src', props.src, 'Props'),
	poster: text('poster', props.poster, 'Props'),
	autoPlay: boolean('autoPlay', props.autoPlay || false, 'Props'),
	controls: boolean('controls', props.controls || false, 'Props'),
	muted: boolean('muted', props.muted || false, 'Props'),
	loop: boolean('loop', props.loop || false, 'Props'),
	playOnHover: boolean('playOnHover', props.playOnHover || false, 'Props'),
});
