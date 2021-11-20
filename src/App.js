import React, { useState } from 'react';
import { Transition } from 'react-transition-group';
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
			<Transition in={isShow} timeout={500} mountOnEnter unmountOnExit>
				{(state) => <Modal show={state} closed={closeModal} />}
			</Transition>

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
