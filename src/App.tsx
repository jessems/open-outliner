import React from 'react';
import './App.css';
import Bullet from './Bullet';
import BulletContent from './BulletContent';
import { data } from './data';

function App() {
	return (
		<div>
			<Bullet data={data} />
		</div>
	);
}

export default App;
