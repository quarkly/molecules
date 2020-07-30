import React, { forwardRef } from 'react';
import { genericHashLink, HashLink } from 'react-router-hash-link';
import GatsbyLink from 'gatsby-link';
import atomize from '@quarkly/atomize';

import defaults from './defaults';

const relative = new RegExp('^(?:[a-z]+:)?//', 'i');
const mail = new RegExp('^mailto:', 'i');

const GatsbyHashLink = props => genericHashLink(props, GatsbyLink);

const getEnvType = () => {
	let globalThis = null;

	if (typeof window !== 'undefined') {
		globalThis = window;
	} else if (typeof global !== 'undefined') {
		globalThis = global;
	} else {
		return null;
	}

	if (!globalThis.QAPI) {
		return null;
	}

	return globalThis.QAPI.projectType;
};

const A = forwardRef((props, ref) => {
	const { href = '', target, ...rest } = props;
	const isAbsolute = relative.test(href);
	const isMail = mail.test(href);
	const isNewTab = target === '_blank';
	const isRouter = !isAbsolute && !isMail && !isNewTab;
	const projectType = getEnvType();

	if (isRouter) {
		let Link = HashLink;

		if (projectType === 'gatsby') {
			Link = GatsbyHashLink;
		}

		return <Link to={href} ref={ref} {...rest} />;
	}

	// eslint-disable-next-line jsx-a11y/anchor-has-content
	return <a href={href} target={target} ref={ref} {...rest} />;
});

export { defaults as defaultsLink };

export default atomize(A)(
	{
		name: 'Link',
		effects: {
			link: ':link',
			hover: ':hover',
			visited: ':visited',
			active: ':active',
		},
		normalize: true,
		mixins: true,
		description: {
			en: 'Text element — text in different variants: paragraph, heading, etc.',
			ru: 'Элемент text — текст в различных вариантах: параграф, заголовок, и другие',
		},

		propInfo: {
			href: {
				control: 'input',
				description: {
					en: 'href — destination address where the link takes to',
					ru: 'href — адрес назначения, по которому направляет ссылка',
				},
				category: 'Main',
				weight: 1,
			},
			target: {
				control: 'select',
				variants: ['_self', '_blank', '_parent', '_top'],
				category: 'Main',
				weight: 1,
			},
		},
	},
	defaults,
);
