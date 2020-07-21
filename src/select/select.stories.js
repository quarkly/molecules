import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Theme from '@quarkly/theme';
import getKnobs from './knobs';
import Wrapper from '../modules/wrapper';
import Select from './index';

const stories = storiesOf('Select', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
	<Theme>
		<Wrapper>
			<Select { ...getKnobs() }>
				<option value="option1">{ text('Option 1', 'Option 1') }</option>
				<option value="option2">{ text('Option 2', 'Option 2') }</option>
				<option value="option3">{ text('Option 3', 'Option 3') }</option>
				<option value="option4">{ text('Option 4', 'Option 4') }</option>
			</Select>
		</Wrapper>
	</Theme>
));
