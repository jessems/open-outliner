import React from 'react';
import BulletContent from './BulletContent';

const Bullet = ({ data }: { data: Array<any> }) => {
	return (
		<div style={{ paddingLeft: '20px' }}>
			{data.map(parent => {
				return (
					<div key={parent.name}>
						<span
							contentEditable={true}
							suppressContentEditableWarning={true}
						>
							{parent.name}
						</span>
						{/* Base Condition and Rendering recursive component from inside itself */}
						<div>
							{parent.children && (
								<Bullet data={parent.children} />
							)}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Bullet;
