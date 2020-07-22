import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Theme from '@quarkly/theme';
import getKnobs from './knobs';
import Wrapper from '../modules/wrapper';
import { Strike, S } from './index';

const stories = storiesOf('S', module);

stories.addDecorator(withKnobs);

stories.add('Strike', () => (
	<Theme>
		<Wrapper>
			<Strike {...getKnobs()}>{text('Text', 'Strike text here')}</Strike>
		</Wrapper>
	</Theme>
));

stories.add('S', () => (
	<Theme>
		<Wrapper>
			<S {...getKnobs()}>{text('Text', 'Strike text here')}</S>
		</Wrapper>
	</Theme>
));
