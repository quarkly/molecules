import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Theme from '@quarkly/theme';
import getKnobs from './knobs';
import Wrapper from '../../modules/wrapper';
import StackItem from './index';
import Text from '../../primitives/text';

const stories = storiesOf('Components/StackItem', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
	<Theme>
		<Wrapper>
			<StackItem {...getKnobs()}>
				<Text>StackItem with Text</Text>
			</StackItem>
		</Wrapper>
	</Theme>
));
