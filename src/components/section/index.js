import React from 'react';
import { useOverrides } from '@quarkly/components';

import Box from '../../primitives/box';

import defaultProps from './defaults';

const overrides = {
	sectionContent: {
		props: {},
	},
};

const effects = {
	hover: ':hover',
};

const propInfo = {
	'inner-width': {
		library: 'components.section.width',
		control: 'input',
		transformer: 'width',
		category: 'Main',
		weight: 1,
	},
	'inner-min-width': {
		library: 'components.section.minWidth',
		control: 'input',
		transformer: 'width',
		category: 'Main',
		weight: 1,
	},
	'inner-max-width': {
		library: 'components.section.maxWidth',
		control: 'input',
		transformer: 'width',
		category: 'Main',
		weight: 1,
	},
};

const Section = ({
	'inner-width': iw,
	'inner-max-width': imaxw,
	'inner-min-width': iminw,
	...props
}) => {
	const { override, children, rest } = useOverrides(props, overrides, defaultProps);

	return (
		<Box {...rest}>
			<Box
				width={iw}
				max-width={imaxw}
				min-width={iminw}
				min-height="16px"
				margin="0 auto"
				flex-direction="column"
				display="flex"
				{...override('sectionContent')}
			>
				{children}
			</Box>
		</Box>
	);
};

export default Object.assign(Section, {
	overrides,
	defaultProps,
	effects,
	propInfo,
});
