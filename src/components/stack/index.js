import React from 'react';

import Box from '../../primitives/box';

import defaultProps from './defaults';

const effects = {
	hover: ':hover',
};

const propInfo = {
	gap: {
		control: 'input',
		library: 'components.stack.gap',
		transformer: 'pixel',
		category: 'Main',
		weight: '1',
	},
};

const Stack = ({ gap, children, ...rest }) => (
	<Box margin={`calc(${gap} * -0.5)`} {...rest}>
		{React.Children.map(children, child =>
			React.isValidElement(child) ? React.cloneElement(child, { gap }) : child,
		)}
	</Box>
);

export default Object.assign(Stack, {
	defaultProps,
	effects,
	propInfo,
});
