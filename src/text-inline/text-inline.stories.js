import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Theme from '@quarkly/theme';
import getKnobs from './knobs';
import Wrapper from '../modules/wrapper';
import Inline from './index';

const stories = storiesOf('Text (inline)', module);

stories.addDecorator(withKnobs);

stories.add('span', () => (
	<Theme>
		<Wrapper>
			<Inline {...getKnobs()}>{text('Text', 'Some text here')}</Inline>
		</Wrapper>
	</Theme>
));
