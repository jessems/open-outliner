import React from 'react';
import BulletContent from './BulletContent';
import Arrow from './Arrow';
import BulletIcon from './BulletIcon';

const Bullet = ({ data }: { data: Array<any> | any }) => {
	const [showContents, setShowContents] = React.useState(true);

	if (Array.isArray(data)) {
		return (
			<>
				{data.map(parent => {
					return <Bullet data={parent} />;
				})}
			</>
		);
	} else {
		return (
			<>
				<div
					style={{
						position: 'relative',
						display: 'flex'
					}}
				>
					<Arrow
						style={{
							position: 'absolute',
							left: '32px',
							transform: showContents
								? 'rotate(90deg)'
								: 'rotate(0deg)'
						}}
						onClick={() => setShowContents(!showContents)}
					/>
					<BulletIcon />
					<div key={data.content}>
						<span
							contentEditable={true}
							suppressContentEditableWarning={true}
						>
							{data.content}
						</span>
					</div>
				</div>
				<div
					id="children"
					style={{
						paddingLeft: '20px',
						display: showContents ? 'block' : 'none'
					}}
				>
					{data.children && <Bullet data={data.children} />}
				</div>
			</>
		);
	}
};

export default Bullet;
