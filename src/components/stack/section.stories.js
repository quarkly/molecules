import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Theme from '@quarkly/theme';
import defaults from './defaults';
import getKnobs from './knobs';
import Wrapper from '../../modules/wrapper';
import Stack from './index';
import StackItem from '../stackItem';
import Text from '../../primitives/text';

const stories = storiesOf('Components/Stack', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
	<Theme>
		<Wrapper>
			<Stack {...getKnobs(defaults)}>
				<StackItem width="50%">
					<Text margin="0">First Item</Text>
				</StackItem>
				<StackItem width="50%">
					<Text margin="0">Second Item</Text>
				</StackItem>
			</Stack>
		</Wrapper>
	</Theme>
));
