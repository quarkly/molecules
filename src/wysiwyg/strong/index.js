import atomize from '@quarkly/atomize';

import defaults from './defaults';

export { defaults as defaultsStrong };

const config = {
	name: 'Strong',
	normalize: true,
	mixins: true,
	description: {
		en: 'Strong text',
		ru: 'Жирный текст',
	},
	propInfo: {},
};

export const Strong = atomize.strong(config, defaults);
export const B = atomize.b(config, defaults);
