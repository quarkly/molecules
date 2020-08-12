import React from 'react';
import atomize from '@quarkly/atomize';

import defaultProps from './defaults';

const Track = ({ src, srclang, kind, label, isDefault, children, ...props }) => {
	return (
		<track
			{...props}
			default={isDefault || undefined}
			src={src}
			srcLang={srclang}
			kind={kind}
			label={label}
		/>
	);
};

const propInfo = {
	src: {
		title: 'Src',
		description: {
			en: 'Address of the track (.vtt file)',
			ru: 'Адрес файла текстовой дорожки (.vtt файл)',
		},
		control: 'input',
		type: 'string',
		category: 'Main',
		weight: 1,
	},
	isDefault: {
		title: 'Default',
		description: {
			en: 'Use this track as default',
			ru: 'Использовать эту дорожку по умолчанию',
		},
		control: 'checkbox',
		type: 'boolean',
		category: 'Main',
		weight: 1,
	},
	srclang: {
		title: 'SrcLang',
		description: {
			en: 'Language of the track text data',
			ru: 'Язык текстовых данных трека',
		},
		control: 'input',
		type: 'string',
		category: 'Main',
		weight: 1,
	},
	kind: {
		title: 'Kind',
		description: {
			en: 'How the text track is meant to be used',
			ru: 'Как текстовый трек должен быть использован',
		},
		control: 'select',
		variants: ['subtitles', 'captions', 'descriptions', 'chapters', 'metadata'],
		type: 'string',
		category: 'Main',
		weight: 1,
	},
	label: {
		title: 'Label',
		description: {
			en: 'A user-readable title of the text track',
			ru: 'Видимый пользователю заголовок текстовой дорожки',
		},
		control: 'input',
		type: 'string',
		category: 'Main',
		weight: 1,
	},
};

export default atomize(Track)(
	{
		name: 'Track',
		description: {
			en: 'Indicates timed text tracks for Video, and Audio components',
			ru: 'Указывает синхронизированные текстовые дорожки для компонентов Video и Audio',
		},
		propInfo,
	},
	defaultProps,
);
