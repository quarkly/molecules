import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Theme from '@quarkly/theme';
import getKnobs from './knobs';
import Wrapper from '../modules/wrapper';
import Box from './index';

const stories = storiesOf('Box', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
	<Theme>
		<Wrapper>
			<Box {...getKnobs()}>{text('Label', 'Default box')}</Box>
		</Wrapper>
	</Theme>
));

stories.add('header', () => (
	<Theme>
		<Wrapper>
			<Box {...getKnobs({ as: 'header' })}>{text('Label', 'Header container')}</Box>
		</Wrapper>
	</Theme>
));

stories.add('section', () => (
	<Theme>
		<Wrapper>
			<Box {...getKnobs({ as: 'section' })}>{text('Label', 'Section container')}</Box>
		</Wrapper>
	</Theme>
));

stories.add('footer', () => (
	<Theme>
		<Wrapper>
			<Box {...getKnobs({ as: 'footer' })}>{text('Label', 'Footer container')}</Box>
		</Wrapper>
	</Theme>
));
