import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Theme from '@quarkly/theme';
import getKnobs from './knobs';
import Wrapper from '../modules/wrapper';
import Button from './index';

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);

stories.add('submit', () => (
	<Theme>
		<Wrapper>
			<Button {...getKnobs()}>{text('Label', 'Submit')}</Button>
		</Wrapper>
	</Theme>
));

stories.add('button', () => (
	<Theme>
		<Wrapper>
			<Button {...getKnobs({ type: 'button' })}>{text('Label', 'Button')}</Button>
		</Wrapper>
	</Theme>
));

stories.add('disabled', () => (
	<Theme>
		<Wrapper>
			<Button {...getKnobs({ disabled: true })}>{text('Label', 'Disabled')}</Button>
		</Wrapper>
	</Theme>
));
