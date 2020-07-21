import { addons } from '@storybook/addons';
import '@storybook/addon-knobs/register';
import theme from './quarkly-theme';

addons.setConfig({
	theme,
});
