import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Theme from '@quarkly/theme';
import getKnobs from './knobs';
import Wrapper from '../../modules/wrapper';
import { Em, I } from './index';

const stories = storiesOf('Wysiwyg/Italic', module);

stories.addDecorator(withKnobs);

stories.add('em', () => (
	<Theme>
		<Wrapper>
			<Em {...getKnobs()}>{text('Text', 'Italic text here')}</Em>
		</Wrapper>
	</Theme>
));

stories.add('i', () => (
	<Theme>
		<Wrapper>
			<I {...getKnobs()}>{text('Text', 'Italic text here')}</I>
		</Wrapper>
	</Theme>
));
