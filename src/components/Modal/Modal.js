import React from 'react';
import { Transition, CSSTransition } from 'react-transition-group';

import './Modal.css';

const modal = (props) => {
	return (
		<CSSTransition
			in={props.show}
			timeout={500}
			classNames='modal'
			mountOnEnter
			unmountOnExit>
			<div className='modal'>
				<h1>A Modal</h1>
				<button className='Button' onClick={props.closed}>
					Dismiss
				</button>
			</div>
		</CSSTransition>
	);

	// return (
	// 	<Transition in={props.show} timeout={500} mountOnEnter unmountOnExit>
	// 		{(state) => {
	// 			const cssClasses = `Modal ${
	// 				state === 'entering'
	// 					? 'ModalOpen'
	// 					: state === 'exiting'
	// 					? 'ModalClose'
	// 					: null
	// 			}`;

	// 			return (
	// <div className={cssClasses}>
	// 	<h1>A Modal</h1>
	// 	<button className='Button' onClick={props.closed}>
	// 		Dismiss
	// 	</button>
	// </div>
	// 			);
	// 		}}
	// 	</Transition>
	// );
};

export default modal;
