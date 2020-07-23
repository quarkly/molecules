import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Theme from '@quarkly/theme';
import getKnobs from './knobs';
import Wrapper from '../../modules/wrapper';
import Input from './index';

const stories = storiesOf('Primitives/Input', module);

stories.addDecorator(withKnobs);

stories.add('default input', () => (
	<Theme>
		<Wrapper>
			<Input {...getKnobs()} />
		</Wrapper>
	</Theme>
));

stories.add('input with placeholder', () => (
	<Theme>
		<Wrapper>
			<Input {...getKnobs({ placeholder: 'some placeholder' })} />
		</Wrapper>
	</Theme>
));

stories.add('input with value', () => (
	<Theme>
		<Wrapper>
			<Input
				{...getKnobs({ placeholder: 'some placeholder', defaultValue: 'default value' })}
			/>
		</Wrapper>
	</Theme>
));

stories.add('default textarea', () => (
	<Theme>
		<Wrapper>
			<Input {...getKnobs({ as: 'textarea' })} />
		</Wrapper>
	</Theme>
));

stories.add('textarea with placeholder', () => (
	<Theme>
		<Wrapper>
			<Input {...getKnobs({ as: 'textarea', placeholder: 'some placeholder' })} />
		</Wrapper>
	</Theme>
));

stories.add('textarea with value', () => (
	<Theme>
		<Wrapper>
			<Input
				{...getKnobs({
					as: 'textarea',
					placeholder: 'some placeholder',
					defaultValue: 'default value',
				})}
			/>
		</Wrapper>
	</Theme>
));
