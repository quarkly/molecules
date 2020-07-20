import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Theme from '@quarkly/theme';
import getKnobs from './knobs';
import Box from './index';

const stories = storiesOf('Box', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
	<Theme>
		<Box { ...getKnobs() }>
			{ text('Label', 'Default box') }
		</Box>
	</Theme>
));

stories.add('header', () => (
	<Theme>
		<Box { ...getKnobs({ as: 'header' }) }>
			{ text('Label', 'Header container') }
		</Box>
	</Theme>
));

stories.add('section', () => (
	<Theme>
		<Box { ...getKnobs({ as: 'section' }) }>
			{ text('Label', 'Section container') }
		</Box>
	</Theme>
));

stories.add('footer', () => (
	<Theme>
		<Box { ...getKnobs({ as: 'footer' }) }>
			{ text('Label', 'Footer container') }
		</Box>
	</Theme>
));
