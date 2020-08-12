import { text, select, boolean } from '@storybook/addon-knobs';
import defaults from './defaults';
import getDefaultKnobs from '../../modules/knobs';

export default (props = {}) => ({
	...getDefaultKnobs(defaults),

	src: text('src', props.src, 'Props'),
	isDefault: boolean('default', props.isDefault || false, 'Props'),
	srclang: text('srclang', props.srclang, 'Props'),
	kind: select(
		'kind',
		{
			subtitles: 'subtitles',
			captions: 'captions',
			descriptions: 'descriptions',
			chapters: 'chapters',
			metadata: 'metadata',
		},
		props.kind || 'subtitles',
		'Props',
	),
	label: text('label', props.label, 'Props'),
});
