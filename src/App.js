import React, { useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';

const App = () => {
	const [isShow, setIsShow] = useState(false);

	const showModal = () => setIsShow(true);

	const closeModal = () => setIsShow(false);

	return (
		<div className='App'>
			<h1>React Animations</h1>

			<Modal show={isShow} closed={closeModal} />
			{isShow && <Backdrop show={isShow} closed={closeModal} />}
			<button className='Button' onClick={showModal}>
				Open Modal
			</button>
			<h3>Animating Lists</h3>
			<List />
		</div>
	);
};

export default App;
