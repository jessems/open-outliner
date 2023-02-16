import React from 'react';
import BulletContent from './BulletContent';
import Triangle from './Triangle';

const Bullet = ({ data }: { data: Array<any> }) => {
	const [showContents, setShowContents] = React.useState(true);
	return (
		<>
			{data.map(parent => {
				return (
					<div
						style={{
							paddingLeft: '20px',
							position: 'relative',
							display: 'flex'
						}}
					>
						<Triangle
							style={{
								transform: showContents
									? 'rotate(90deg)'
									: 'rotate(0deg)'
							}}
							onClick={() => setShowContents(!showContents)}
						/>
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
					</div>
				);
			})}
		</>
	);
};

export default Bullet;
