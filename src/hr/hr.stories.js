import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Theme from '@quarkly/theme';
import getKnobs from './knobs';
import Hr from './index';

const stories = storiesOf('Hr', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
	<Theme>
		<Hr { ...getKnobs() }></Hr>
	</Theme>
));
