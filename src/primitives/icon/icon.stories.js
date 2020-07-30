import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Theme from '@quarkly/theme';
import Wrapper from '../../modules/wrapper';
import Text, { defaultsText } from '../text';
import Link, { defaultsLink } from '../link';

const stories = storiesOf('Primitives/Icon', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
	<Theme>
		<Wrapper>
			<Text {...defaultsText} margin-left="32px">
				{'This component is only available in '}
				<Link {...defaultsLink} href="https://quarkly.io/" target="_blank">
					Quarkly.io
				</Link>
			</Text>
		</Wrapper>
	</Theme>
));
