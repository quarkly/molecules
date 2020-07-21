import atomize from '@quarkly/atomize';

export default atomize.div(
	{
		name: 'Wrapper',
		propInfo: {},
	},
	{
		'margin': '16px 8px',

		'color': '#000000',
		'background-color': '#FFFFFF',
		'box-shadow': '0 0 48px 0 rgba(0,0,0,.2)',

		'font-family': 'sans-serif',

		'user-select': 'none',
		'position': 'relative'
	}
);
