import * as React from 'react';

const Triangle = props => (
	<svg width={20} height={20} {...props}>
		<path
			d="M13.75 9.569a.5.5 0 0 1 0 .866l-5.25 3.03a.5.5 0 0 1-.75-.432V6.97a.5.5 0 0 1 .75-.433l5.25 3.03Z"
			fill="currentColor"
		/>
	</svg>
);

export default Triangle;
