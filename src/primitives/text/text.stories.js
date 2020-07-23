import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Theme from '@quarkly/theme';
import getKnobs from './knobs';
import Wrapper from '../../modules/wrapper';
import Text from './index';

const stories = storiesOf('Primitives/Text', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
	<Theme>
		<Wrapper>
			<Text {...getKnobs()}>{text('Text', 'Some text here')}</Text>
		</Wrapper>
	</Theme>
));

stories.add('header 1', () => (
	<Theme>
		<Wrapper>
			<Text {...getKnobs({ as: 'h1' })}>{text('Text', 'Header 1')}</Text>
		</Wrapper>
	</Theme>
));

stories.add('header 2', () => (
	<Theme>
		<Wrapper>
			<Text {...getKnobs({ as: 'h2' })}>{text('Text', 'Header 2')}</Text>
		</Wrapper>
	</Theme>
));

stories.add('header 3', () => (
	<Theme>
		<Wrapper>
			<Text {...getKnobs({ as: 'h3' })}>{text('Text', 'Header 3')}</Text>
		</Wrapper>
	</Theme>
));

stories.add('header 4', () => (
	<Theme>
		<Wrapper>
			<Text {...getKnobs({ as: 'h4' })}>{text('Text', 'Header 4')}</Text>
		</Wrapper>
	</Theme>
));

stories.add('header 5', () => (
	<Theme>
		<Wrapper>
			<Text {...getKnobs({ as: 'h5' })}>{text('Text', 'Header 5')}</Text>
		</Wrapper>
	</Theme>
));

stories.add('header 6', () => (
	<Theme>
		<Wrapper>
			<Text {...getKnobs({ as: 'h6' })}>{text('Text', 'Header 6')}</Text>
		</Wrapper>
	</Theme>
));

stories.add('paragraph', () => (
	<Theme>
		<Wrapper>
			<Text {...getKnobs({ as: 'p' })}>{text('Text', 'Paragraph')}</Text>
		</Wrapper>
	</Theme>
));
