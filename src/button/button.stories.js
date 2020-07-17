import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Theme from '@quarkly/theme';
import getDefaultKnobs from '../modules/knobs';
import defaults from './defaults';
import Button from './index';

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
	<Theme>
		<Button>
			{ text('Label', 'Default') }
		</Button>
	</Theme>
));

stories.add('with props', () => (
	<Theme>
		<Button { ...getDefaultKnobs(defaults) }>
			{ text('Label', 'With Props') }
		</Button>
	</Theme>
));
