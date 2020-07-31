import React from 'react';
import { useOverrides } from '@quarkly/components';

import Box from '../../primitives/box';

import defaultProps from './defaults';

const overrides = {
	StackContent: {
		props: {},
	},
};

const effects = {
	hover: ':hover',
};

const StackItem = ({ gap, ...props }) => {
	const { override, children, rest } = useOverrides(props, overrides, defaultProps);

	return (
		<Box {...rest} padding={`calc(${gap} / 2)`} box-sizing="border-box">
			<Box
				min-height="100%"
				flex="1 1 auto"
				box-sizing="border-box"
				display="flex"
				{...override('StackItemContent')}
			>
				{children}
			</Box>
		</Box>
	);
};

export default Object.assign(StackItem, {
	overrides,
	defaultProps,
	effects,
});
