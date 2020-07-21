import { create } from '@storybook/theming/create';

export default create({
	base: '#22262e',

	colorPrimary: '#248de0',
	colorSecondary: '#003766',

	// UI
	appBg: '#04080C',
	appContentBg: '#22262e',
	appBorderColor: 'grey',
	appBorderRadius: 4,

	// Typography
	fontBase: '"Open Sans", sans-serif',
	fontCode: 'monospace',

	// Text colors
	textColor: '#F8FAFF',
	textInverseColor: 'rgba(255,255,255,0.9)',

	// Toolbar default and active colors
	barTextColor: 'silver',
	barSelectedColor: '#248de0',
	barBg: '#2c3139',

	// Form colors
	inputBg: '#2c3139',
	inputBorder: '#2c3139',
	inputTextColor: '#2c3139',
	inputBorderRadius: 4,

	brandTitle: 'quarkly molecules',
	brandUrl: 'https://quarkly.io',
	brandImage: 'https://uploads.quarkly.io/landing/logo-on-dark.svg',
});
