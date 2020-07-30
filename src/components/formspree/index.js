import React, { useState } from 'react';
import atomize from '@quarkly/atomize';

import Text from '../../primitives/text';
import Link from '../../primitives/link';
import { Strong } from '../../wysiwyg/strong';

import defaultProps from './defaults';

const NoEndPoint = atomize.div`
	padding: 16px 32px;
	border: 2px solid;
	min-width: 100px;
`;

const Wrapper = atomize.div`
	min-height: 32px;
`;

const url = 'https://formspree.io/';

const propInfo = {
	endpoint: {
		control: 'input',
		category: 'Main',
		weight: 1,
	},
	completeText: {
		control: 'input',
		category: 'Main',
		weight: 1,
	},
	errorMessage: {
		control: 'input',
		category: 'Main',
		weight: 1,
	},
};

const Formspree = props => {
	const { children, endpoint = '', errorMessage, completeText, ...rest } = props;

	const [complete, setComplete] = useState(false);
	const [fetching, setFetching] = useState(false);
	const [error, setError] = useState(false);
	const action = url + endpoint.trim().replace(url, '');

	const onSubmit = async event => {
		if (fetching) return;

		event.preventDefault();

		setError(false);
		setFetching(true);

		const form = event.target;
		const data = new FormData(form);
		const button = form.querySelector('[type="submit"]');
		button && button.setAttribute('disabled', true);

		const request = new XMLHttpRequest();
		request.open('POST', action);
		request.setRequestHeader('Accept', 'application/json');
		request.onreadystatechange = () => {
			if (request.readyState !== XMLHttpRequest.DONE) return;
			if (request.status === 200) {
				setComplete(true);
			} else {
				setError(true);
			}
		};
		request.send(data);

		setFetching(false);
		button && button.removeAttribute('disabled');
	};

	if (!endpoint || typeof endpoint !== 'string') {
		return (
			<Wrapper {...rest}>
				<NoEndPoint>
					{'Create a form on '}
					<Link
						color="currentColor"
						target="_blank"
						rel="noopener noreferrer"
						href="https://formspree.io/"
					>
						formspree.io
					</Link>
					{' and fill in the '}
					<Strong>endpoint</Strong>
					{' field on the '}
					<Strong>props panel</Strong>
				</NoEndPoint>
			</Wrapper>
		);
	}

	if (!complete) {
		return (
			<Wrapper {...rest}>
				<form
					encType="multipart/form-data"
					method="post"
					onSubmit={onSubmit}
					action={action}
				>
					{children}
					{error ? (
						<Text font="--primary" color="--red">
							{errorMessage}
						</Text>
					) : null}
				</form>
			</Wrapper>
		);
	}

	return <Wrapper {...rest}>{completeText}</Wrapper>;
};

export default Object.assign(Formspree, {
	defaultProps,
	propInfo,
});
