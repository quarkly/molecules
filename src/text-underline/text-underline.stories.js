import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Theme from '@quarkly/theme';
import getKnobs from './knobs';
import Wrapper from '../modules/wrapper';
import U from './index';

const stories = storiesOf('Text (underline)', module);

stories.addDecorator(withKnobs);

stories.add('u', () => (
	<Theme>
		<Wrapper>
			<U {...getKnobs()}>{text('Text', 'Underline text here')}</U>
		</Wrapper>
	</Theme>
));
