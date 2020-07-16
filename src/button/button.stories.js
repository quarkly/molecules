import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, color, select, number } from '@storybook/addon-knobs';

import { default as Theme } from '@quarkly/theme';
import Button from './index';

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
	<Theme>
		<Button>
			{ text('Label', 'Default') }
		</Button>
	</Theme>
));
stories.add('with props', () => (
	<Theme>
		<Button
			display={select(
				'display',
				{
					'block': 'block',
					'inline': 'inline',
					'inline-block': 'inline-block',
					'flex': 'flex',
					'grid': 'grid',
					'none': 'none',
					'contents': 'contents',
					'inline-flex': 'inline-flex',
					'inline-grid': 'inline-grid',
					'inline-table': 'inline-table',
					'list-item': 'list-item',
					'run-in': 'run-in',
					'inherit': 'inherit',
					'initial': 'initial'
				},
				'inline-block',
				'Layout',
			)}
			width={text('width', '', 'Layout')}
			min-width={text('minWidth', '', 'Layout')}
			max-width={text('maxWidth', '', 'Layout')}
			height={text('height', '', 'Layout')}
			min-height={text('minHeight', '', 'Layout')}
			max-height={text('maxHeight', '', 'Layout')}
			
			overflow-x={select(
				'overflowX',
				{
					'–': 'initial',
					'auto': 'auto',
					'hidden': 'hidden',
					'scroll': 'scroll',
					'visible': 'visible',
					'inherit': 'inherit'
				},
				'visible',
				'Layout',
			)}
			overflow-y={select(
				'overflowY',
				{
					'–': 'initial',
					'auto': 'auto',
					'hidden': 'hidden',
					'scroll': 'scroll',
					'visible': 'visible',
					'inherit': 'inherit'
				},
				'visible',
				'Layout',
			)}
			
			flex-direction={select(
				'flexDirection',
				{
					'–': 'initial',
					'row': 'row',
					'row-reverse': 'row-reverse',
					'column': 'column',
					'column-reverse': 'column-reverse'
				},
				'row',
				'Layout',
			)}
			align-items={select(
				'alignItems',
				{
					'–': 'initial',
					'flex-start': 'flex-start',
					'flex-end': 'flex-end',
					'center': 'center',
					'baseline': 'baseline',
					'stretch': 'stretch',
					'inherit': 'inherit',
					'initial': 'initial',
					'unset': 'unset'
				},
				'flex-start',
				'Layout',
			)}
			justify-content={select(
				'justifyContent',
				{
					'–': 'initial',
					'center': 'center',
					'start': 'start',
					'end': 'end',
					'flex-start': 'flex-start',
					'flex-end': 'flex-end',
					'left': 'left',
					'right': 'right',
					'baseline': 'baseline',
					'first baseline': 'first baseline',
					'last baseline': 'last baseline',
					'space-between': 'space-between',
					'space-around': 'space-around',
					'space-evenly': 'space-evenly',
					'stretch': 'stretch',
					'safe center': 'safe center',
					'unsafe center': 'unsafe center',
					'inherit': 'inherit',
					'initial': 'initial',
					'unset': 'unset'
				},
				'flex-start',
				'Layout',
			)}
			flex-wrap={select(
				'flexWrap',
				{
					'–': 'initial',
					'nowrap': 'nowrap',
					'wrap': 'wrap',
					'wrap-reverse': 'wrap-reverse'
				},
				'nowrap',
				'Layout',
			)}
			
			font-family={text('fontFamily', '', 'Typography')}
			font-size={text('fontSize', '16px', 'Typography')}
			line-height={text('lineHeight', '1.5', 'Typography')}
			font-weight={text('fontWeight', '300', 'Typography')}
			font-style={select(
				'fontStyle',
				{
					'–': 'initial',
					'normal': 'normal',
					'italic': 'italic'
				},
				'normal',
				'Typography',
			)}
			font-variant={select(
				'fontVariant',
				{
					'–': 'initial',
					'normal': 'normal',
					'small-caps': 'small-caps'
				},
				'–',
				'Typography',
			)}
			letter-spacing={text('letterSpacing', 'normal', 'Typography')}
			white-space={select(
				'whiteSpace',
				{
					'–': 'initial',
					'normal': 'normal',
					'nowrap': 'nowrap',
					'pre': 'pre',
					'pre-line': 'pre-line',
					'pre-wrap': 'pre-wrap'
				},
				'normal',
				'Typography',
			)}
			text-transform={text('textTransform', '', 'Typography')}
			text-decoration={text('textDecoration', '', 'Typography')}
			text-align={select(
				'textAlign',
				{
					'left': 'left',
					'center': 'center',
					'right': 'right',
					'justify': 'justify'
				},
				'center',
				'Typography',
			)}
			color={color('color', '--light', 'Typography')}
			
			margin-top={text('marginTop', '0px', 'Indents')}
			margin-right={text('marginRight', '0px', 'Indents')}
			margin-bottom={text('marginBottom', '0px', 'Indents')}
			margin-left={text('marginLeft', '0px', 'Indents')}
			
			padding-top={text('paddingTop', '8px', 'Indents')}
			padding-right={text('paddingRight', '24px', 'Indents')}
			padding-bottom={text('paddingBottom', '8px', 'Indents')}
			padding-left={text('paddingLeft', '24px', 'Indents')}
			
			background={text('background', '--color-primary', 'Background')}
			background-image={text('backgroundImage', 'url()', 'Background')}
			background-position={text('backgroundPosition', 'none', 'Background')}
			background-size={select(
				'backgroundSize',
				{
					none: 'none',
					cover: 'cover',
					contain: 'contain',
				},
				'none',
				'Background'
			)}
			background-repeat={select(
				'backgroundRepeat',
				{
					'–': 'initial',
					'repeat': 'repeat',
					'repeat-x': 'repeat-x',
					'repeat-y': 'repeat-y',
					'no-repeat': 'no-repeat',
					'space': 'space',
					'round': 'round'
				},
				'–',
				'Background'
			)}
			background-attachment={select(
				'backgroundAttachment',
				{
					'–': 'initial',
					fixed: 'fixed',
					local: 'local',
					scroll: 'scroll',
				},
				'–',
				'Background'
			)}
			background-clip={select(
				'backgroundClip',
				{
					'–': 'initial',
					'border-box': 'border-box',
					'padding-box': 'padding-box',
					'content-box': 'content-box'
				},
				'–',
				'Background'
			)}
			
			border-width={text('borderWidth', '0px', 'Border')}
			border-style={select(
				'borderStyle',
				{
					none: 'none',
					dotted: 'dotted',
					dashed: 'dashed',
					solid: 'solid',
					double: 'double',
					groove: 'groove',
					ridge: 'ridge',
					inset: 'inset',
					outset: 'outset',
					hidden: 'hidden',
					inherit: 'inherit'
				},
				'none',
				'Border'
			)}
			border-color={color('borderColor', 'rgb(118,118,118)', 'Border')}
			border-radius={text('borderRadius', '2px', 'Border')}
			
			position={select(
				'position',
				{
					'–': 'initial',
					absolute: 'absolute',
					fixed: 'fixed',
					sticky: 'sticky',
					relative: 'relative',
					static: 'static',
					inherit: 'inherit'
				},
				'–',
				'Position'
			)}
			top={text('top', '', 'Position')}
			right={text('right', '', 'Position')}
			bottom={text('bottom', '', 'Position')}
			left={text('left', '', 'Position')}
			zIndex={text('zIndex', 'auto', 'Position')}
			
			opacity={number('opacity', '1', '{1}', 'Effects')}
			cursor={select(
				'cursor',
				{
					'–': 'initial',
					'auto': 'auto',
					'default': 'default',
					'none': 'none',
					'context-menu': 'context-menu',
					'help': 'help',
					'pointer': 'pointer',
					'progress': 'progress',
					'wait': 'wait',
					'cell': 'cell',
					'crosshair': 'crosshair',
					'text': 'text',
					'vertical-text': 'vertical-text',
					'alias': 'alias',
					'copy': 'copy',
					'move': 'move',
					'no-drop': 'no-drop',
					'not-allowed': 'not-allowed',
					'e-resize': 'e-resize',
					'n-resize': 'n-resize',
					'ne-resize': 'ne-resize',
					'nw-resize': 'nw-resize',
					's-resize': 's-resize',
					'se-resize': 'se-resize',
					'sw-resize': 'sw-resize',
					'w-resize': 'w-resize',
					'ew-resize': 'ew-resize',
					'ns-resize': 'ns-resize',
					'nesw-resize': 'nesw-resize',
					'nwse-resize': 'nwse-resize',
					'col-resize': 'col-resize',
					'row-resize': 'row-resize',
					'all-scroll': 'all-scroll',
					'zoom-in': 'zoom-in',
					'zoom-out': 'zoom-out',
					'grab': 'grab',
					'grabbing': 'grabbing'
				},
				'pointer',
				'Effects'
			)}
			blend-mode={select(
				'blendMode',
				{
					'–': 'initial',
					'normal': 'normal',
					'multiply': 'multiply',
					'screen': 'screen',
					'overlay': 'overlay',
					'darken': 'darken',
					'lighten': 'lighten',
					'color-dodge': 'color-dodge',
					'color-burn': 'color-burn',
					'hard-light': 'hard-light',
					'soft-light': 'soft-light',
					'difference': 'difference',
					'exclusion': 'exclusion',
					'hue': 'hue',
					'saturation': 'saturation',
					'color': 'color',
					'luminosity': 'luminosity'
				},
				'normal',
				'Effects'
			)}
			box-shadow={text('boxShadow', 'none', 'Effects')}
			text-shadow={text('textShadow', 'none', 'Effects')}
			transition={text('transition', 'all 0s ease 0s', 'Effects')}
			transform={text('transform', 'none', 'Effects')}
			filter={text('filter', 'none', 'Effects')}
		>
			{ text('Label', 'With Props') }
		</Button>
	</Theme>
));
