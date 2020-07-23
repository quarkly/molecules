import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Theme from '@quarkly/theme';
import getKnobs from './knobs';
import Wrapper from '../../modules/wrapper';
import { Strong, B } from './index';

const stories = storiesOf('Wysiwyg/Strong', module);

stories.addDecorator(withKnobs);

stories.add('strong', () => (
	<Theme>
		<Wrapper>
			<Strong {...getKnobs()}>{text('Text', 'Strong text here')}</Strong>
		</Wrapper>
	</Theme>
));

stories.add('b', () => (
	<Theme>
		<Wrapper>
			<B {...getKnobs()}>{text('Text', 'Bold text here')}</B>
		</Wrapper>
	</Theme>
));
