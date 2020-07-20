import atomize from '@quarkly/atomize';

import defaults from './defaults';

export default atomize.ul(
	{
		name: 'List',
		effects: {
			hover: ':hover',
			focus: ':focus',
			active: ':active'
		},		
		normalize: true,
		mixins: true,
		description: {
			en:
				'List element — contains entities of the same level',
			ru:
				'Элемент link — ссылка, которая может быть оберткой для других элементов'
		},
		propInfo: {
			as: {
				control: 'select',
				type: 'string',
				variants: [ 'ul', 'ol' ],
				category: 'Main',
				weight: 1
			},
			'list-style-type': {
				control: 'select',
				type: 'string',
				variants: [
					'circle',
					'disc',
					'square',
					'armenian',
					'decimal',
					'decimal-leading-zero' ,
					'georgian',
					'lower-alpha',
					'lower-greek',
					'lower-latin',
					'lower-roman',
					'upper-alpha',
					'upper-latin',
					'upper-roman',
					'none',
					'inherit',
					'initial',
					'unset',
				],
				category: 'Styles',
				weight: 1
			}	  
		}
	},
	defaults,
);
