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

stories.add('2 items (default)', () => (
	<Theme>
		<Wrapper>
			<Stack {...getKnobs(defaults)}>
				<StackItem width="50%">
					<Text>First Item</Text>
				</StackItem>
				<StackItem width="50%">
					<Text>Second Item</Text>
				</StackItem>
			</Stack>
		</Wrapper>
	</Theme>
));

stories.add('3 items', () => (
	<Theme>
		<Wrapper>
			<Stack {...getKnobs(defaults)}>
				<StackItem width="33.33%">
					<Text>First Item</Text>
				</StackItem>
				<StackItem width="33.33%">
					<Text>Second Item</Text>
				</StackItem>
				<StackItem width="33.33%">
					<Text>Third Item</Text>
				</StackItem>
			</Stack>
		</Wrapper>
	</Theme>
));

stories.add('4 items', () => (
	<Theme>
		<Wrapper>
			<Stack {...getKnobs(defaults)}>
				<StackItem width="25%">
					<Text>First Item</Text>
				</StackItem>
				<StackItem width="25%">
					<Text>Second Item</Text>
				</StackItem>
				<StackItem width="25%">
					<Text>Third Item</Text>
				</StackItem>
				<StackItem width="25%">
					<Text>Fourth Item</Text>
				</StackItem>
			</Stack>
		</Wrapper>
	</Theme>
));

stories.add('6 items', () => (
	<Theme>
		<Wrapper>
			<Stack {...getKnobs(defaults)}>
				<StackItem width="16.66%">
					<Text>First Item</Text>
				</StackItem>
				<StackItem width="16.66%">
					<Text>Second Item</Text>
				</StackItem>
				<StackItem width="16.66%">
					<Text>Third Item</Text>
				</StackItem>
				<StackItem width="16.66%">
					<Text>Fourth Item</Text>
				</StackItem>
				<StackItem width="16.66%">
					<Text>Fifth Item</Text>
				</StackItem>
				<StackItem width="16.66%">
					<Text>Sixth Item</Text>
				</StackItem>
			</Stack>
		</Wrapper>
	</Theme>
));
