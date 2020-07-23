import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Theme from '@quarkly/theme';
import getKnobs from './knobs';
import Wrapper from '../../modules/wrapper';
import Option from '../option';
import Select from './index';

const stories = storiesOf('Primitives/Select', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
	<Theme>
		<Wrapper>
			<Select {...getKnobs()}>
				<Option>{text('Option 1', 'Option 1')}</Option>
				<Option>{text('Option 2', 'Option 2')}</Option>
				<Option>{text('Option 3', 'Option 3')}</Option>
				<Option>{text('Option 4', 'Option 4')}</Option>
			</Select>
		</Wrapper>
	</Theme>
));
