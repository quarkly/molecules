import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Theme from '@quarkly/theme';
import getKnobs from './knobs';
import Wrapper from '../modules/wrapper';
import Inline from './index';

const stories = storiesOf('Inline', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
	<Theme>
		<Wrapper>
			<Inline {...getKnobs()}>{text('Text', 'Some text here')}</Inline>
		</Wrapper>
	</Theme>
));
