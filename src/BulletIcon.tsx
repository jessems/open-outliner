import * as React from 'react';

const BulletIcon = (props: any) => (
	<div style={{}}>
		<svg
			width={18}
			height={18}
			viewBox="0 0 18 18"
			fill="currentColor"
			{...props}
		>
			<circle cx={9} cy={9} r={3.5} />
		</svg>
	</div>
);

export default BulletIcon;
