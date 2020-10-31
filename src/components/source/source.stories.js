import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Theme from '@quarkly/theme';
import defaults from './defaults';
import getKnobs from './knobs';
import Wrapper from '../../modules/wrapper';
import Source from './index';

const stories = storiesOf('Components/Source', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
	<Theme>
		<Wrapper>
			<Source {...getKnobs(defaults)} />
		</Wrapper>
	</Theme>
));
