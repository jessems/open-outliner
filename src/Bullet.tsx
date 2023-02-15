import React from 'react';
import BulletContent from './BulletContent';
import Triangle from './Triangle';

const Bullet = ({ data }: { data: Array<any> }) => {
	const [showContents, setShowContents] = React.useState(true);
	// const handleClick = () => {
	// 	setShowContents(!showContents);
	// 	console.log(showContents);
	// };

	return (
		<div style={{ paddingLeft: '20px', position: 'relative' }}>
			<Triangle
				style={{
					position: 'absolute',
					left: '-4px',
					transform: showContents ? 'rotate(90deg)' : 'rotate(0deg)'
				}}
				onClick={() => setShowContents(!showContents)}
			/>
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
						<div
							style={{
								display: showContents ? 'block' : 'none'
							}}
						>
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
