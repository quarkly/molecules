import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Theme from '@quarkly/theme';
import getKnobs from './knobs';
import Wrapper from '../../modules/wrapper';
import Link from './index';

const stories = storiesOf('Primitives/Link', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
	<Theme>
		<Wrapper>
			<BrowserRouter>
				<Link {...getKnobs()}>{text('Label', 'Some text')}</Link>
			</BrowserRouter>
		</Wrapper>
	</Theme>
));
