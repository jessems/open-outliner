import React from 'react';

function BulletContent(props: any) {
	return (
		<>
			<span contentEditable="true">{props.content}</span>
		</>
	);
}

export default BulletContent;
