import { text, select } from '@storybook/addon-knobs';
import defaults from './defaults';
import getDefaultKnobs from '../../modules/knobs';

export default (props = {}) => ({
	...getDefaultKnobs(defaults),

	src: text('src', props.src, 'Audio/Video Props'),
	typeMedia: select(
		'type',
		{
			'–': '',
			'video/mp4': 'video/mp4',
			'video/webm': 'video/webm',
			'video/ogg': 'video/ogg',
			'audio/mpeg': 'audio/mpeg',
			'audio/midi': 'audio/midi',
			'audio/wav': 'audio/wav',
			'audio/ogg': 'audio/ogg',
		},
		props.typeMedia || '–',
		'Audio/Video Props',
	),
	codecs: text('codecs', props.codecs, 'Audio/Video Props'),
	srcSet: text('srcSet', props.srcSet, 'Picture Props'),
	sizes: text('sizes', props.sizes, 'Picture Props'),
	mediaSelect: select(
		'device',
		{
			all: 'all',
			braille: 'braille',
			handheld: 'handheld',
			print: 'print',
			screen: 'screen',
			speech: 'speech',
			projection: 'projection',
			tty: 'tty',
			tv: 'tv',
		},
		props.mediaSelect || 'all',
		'Picture Props',
	),
	mediaInput: text('media query', props.mediaInput, 'Picture Props'),
	typePicture: select(
		'type',
		{
			'–': '',
			'image/webp': 'image/webp',
			'image/png': 'image/png',
			'image/bmp': 'image/bmp',
			'image/jpeg': 'image/jpeg',
			'image/gif': 'image/gif',
			'image/tiff': 'image/tiff',
			'image/pict': 'image/pict',
		},
		props.typeMedia || '–',
		'Picture Props',
	),
});
