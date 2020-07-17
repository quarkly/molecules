import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Theme from '@quarkly/theme';
import getKnobs from './knobs';
import Button from './index';

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);

stories.add('submit', () => (
	<Theme>
		<Button { ...getKnobs() }>
			{ text('Label', 'Submit') }
		</Button>
	</Theme>
));

stories.add('button', () => (
	<Theme>
		<Button { ...getKnobs({ type: 'button' }) }>
			{ text('Label', 'Button') }
		</Button>
	</Theme>
));

stories.add('disabled', () => (
	<Theme>
		<Button { ...getKnobs({ disabled: true }) }>
			{ text('Label', 'Disabled') }
		</Button>
	</Theme>
));
