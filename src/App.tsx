import React from 'react';
import './App.css';
import Bullet from './Bullet';
import BulletContent from './BulletContent';
import { data } from './data';
import Outline from './Outline';

function App() {
	return (
		<div>
			<Outline data={data} />
		</div>
	);
}

export default App;
