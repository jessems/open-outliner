import React from 'react';
import Bullet from './Bullet';

export default function Outline({ data }: { data: Array<any> | any }) {
	return (
		<>
			<Bullet data={data} />
		</>
	);
}
