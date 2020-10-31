import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Theme from '@quarkly/theme';
import defaults from './defaults';
import getKnobs from './knobs';
import Wrapper from '../../modules/wrapper';
import Picture from './index';

const stories = storiesOf('Components/Picture', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
	<Theme>
		<Wrapper>
			<Picture {...getKnobs(defaults)} />
		</Wrapper>
	</Theme>
));
