import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Theme from '@quarkly/theme';
import getKnobs from './knobs';
import Image from './index';

const stories = storiesOf('Image', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
	<Theme>
		<Image { ...getKnobs({
			src: 'https://uploads.quarkly.io/landing/quarkly-features-for-developers-hot-npm-import.png'
		}) } />
	</Theme>
));

stories.add('with alt & title', () => (
	<Theme>
		<Image { ...getKnobs({
			src: 'https://uploads.quarkly.io/landing/quarkly-features-for-developers-custom-props.png',
			alt: 'Transfer necessary element props of your components to the panel',
			title: 'Transfer necessary element props of your components to the panel'
		}) } />
	</Theme>
));
