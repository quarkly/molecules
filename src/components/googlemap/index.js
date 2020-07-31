import React from 'react';
import atomize from '@quarkly/atomize';

import defaultProps from './defaults';

const Map = ({ query = 'none', apiKey = 'none', ...props }) => (
	<div {...props}>
		<iframe
			title="GoogleMap"
			style={{
				position: 'absolute',
				width: '100%',
				height: '100%',
				top: 0,
				left: 0,
			}}
			frameBorder="0"
			allowFullScreen
			src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${query}`}
		/>
	</div>
);

export default atomize(Map)(
	{
		name: 'GoogleMap',
		propInfo: {
			apiKey: {
				control: 'input',
				category: 'Main',
			},
			query: {
				control: 'input',
				category: 'Main',
			},
		},
	},
	defaultProps,
);
