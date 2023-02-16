import React from 'react';
import BulletContent from './BulletContent';
import Triangle from './Triangle';

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
			<div
				style={{
					paddingLeft: '20px',
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
				<div key={data.content}>
					<span
						contentEditable={true}
						suppressContentEditableWarning={true}
					>
						{data.content}
					</span>
					{/* Base Condition and Rendering recursive component from inside itself */}
					<div
						style={{
							display: showContents ? 'block' : 'none'
						}}
					>
						{data.children && <Bullet data={data.children} />}
					</div>
				</div>
			</div>
		);
	}

	return <></>;
};

// const Bullet = ({ data }: { data: Array<any> }) => {
// 	const [showContents, setShowContents] = React.useState(true);

// 	if (Array.isArray(data)) {
// 		// map the array
// 		// return bullet for each
// 	} else {
// 		// map bullet
// 	}

// 	return (
// 		<>
// 			{data.map(parent => {
// 				return (
// 					<div
// 						style={{
// 							paddingLeft: '20px',
// 							position: 'relative',
// 							display: 'flex'
// 						}}
// 					>
// 						<Triangle
// 							style={{
// 								transform: showContents
// 									? 'rotate(90deg)'
// 									: 'rotate(0deg)'
// 							}}
// 							onClick={() => setShowContents(!showContents)}
// 						/>
// 						<div key={parent.name}>
// 							<span
// 								contentEditable={true}
// 								suppressContentEditableWarning={true}
// 							>
// 								{parent.name}
// 							</span>
// 							{/* Base Condition and Rendering recursive component from inside itself */}
// 							<div
// 								style={{
// 									display: showContents ? 'block' : 'none'
// 								}}
// 							>
// 								{parent.children && (
// 									<Bullet data={parent.children} />
// 								)}
// 							</div>
// 						</div>
// 					</div>
// 				);
// 			})}
// 		</>
// 	);
// };

export default Bullet;
