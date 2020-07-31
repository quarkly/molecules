import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Theme from '@quarkly/theme';
import getKnobs from './knobs';
import Wrapper from '../../modules/wrapper';
import GoogleMap from './index';

const stories = storiesOf('Components/GoogleMap', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
	<Theme>
		<Wrapper>
			<GoogleMap {...getKnobs()} />
		</Wrapper>
	</Theme>
));
