import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Theme from '@quarkly/theme';
import getKnobs from './knobs';
import Wrapper from '../modules/wrapper';
import Span from './index';

const stories = storiesOf('Span', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
	<Theme>
		<Wrapper>
			<Span {...getKnobs()}>{text('Text', 'Some text here')}</Span>
		</Wrapper>
	</Theme>
));
