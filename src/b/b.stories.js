import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Theme from '@quarkly/theme';
import getKnobs from './knobs';
import Wrapper from '../modules/wrapper';
import { Strong, B } from './index';

const stories = storiesOf('B', module);

stories.addDecorator(withKnobs);

stories.add('Strong', () => (
	<Theme>
		<Wrapper>
			<Strong {...getKnobs()}>{text('Text', 'Strong text here')}</Strong>
		</Wrapper>
	</Theme>
));

stories.add('B', () => (
	<Theme>
		<Wrapper>
			<B {...getKnobs()}>{text('Text', 'Bold text here')}</B>
		</Wrapper>
	</Theme>
));
