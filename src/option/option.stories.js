import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Theme from '@quarkly/theme';
import getKnobs from './knobs';
import Wrapper from '../modules/wrapper';
import Option from './index';

const stories = storiesOf('Option', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
	<Theme>
		<Wrapper>
			<Option {...getKnobs()}>{text('Label', 'Option Name')}</Option>
		</Wrapper>
	</Theme>
));
