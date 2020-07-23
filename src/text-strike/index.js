import atomize from '@quarkly/atomize';

import defaults from './defaults';

const config = {
	name: 'Strike',
	normalize: true,
	mixins: true,
	description: {
		en: 'Strike text',
		ru: 'Зачеркнутый текст',
	},
	propInfo: {},
};

export const Strike = atomize('strike')(config, defaults);
export const S = atomize.s(config, defaults);
