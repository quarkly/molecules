import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Theme from '@quarkly/theme';
import getKnobs from './knobs';
import Wrapper from '../../modules/wrapper';
import Formspree from './index';
import Input, { defaultsInput } from '../../primitives/input';
import Button, { defaultsButton } from '../../primitives/button';

const stories = storiesOf('Components/Formspree', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
	<Theme>
		<Wrapper>
			<Formspree {...getKnobs()}>
				<Input
					{...getKnobs({ type: 'email', placeholder: text('Input label', 'Email') })}
					{...defaultsInput}
					margin-right="4px"
					display="inline-block"
				/>
				<Button
					{...getKnobs({ type: 'button' })}
					{...defaultsButton}
					display="inline-block"
				>
					{text('Button label', 'Submit')}
				</Button>
			</Formspree>
		</Wrapper>
	</Theme>
));
