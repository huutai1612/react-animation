import React from 'react';
import { Transition } from 'react-transition-group';

import './Modal.css';

const modal = (props) => {
	const cssClasses = `Modal ${
		props.show === 'entering'
			? 'ModalOpen'
			: props.show === 'exiting'
			? 'ModalClose'
			: null
	}`;

	return (
		<Transition in={props.show} timeout={500} mountOnEnter unmountOnExit>
			{(state) => {
				const cssClasses = `Modal ${
					state === 'entering'
						? 'ModalOpen'
						: state === 'exiting'
						? 'ModalClose'
						: null
				}`;

				return (
					<div className={cssClasses}>
						<h1>A Modal</h1>
						<button className='Button' onClick={props.closed}>
							Dismiss
						</button>
					</div>
				);
			}}
		</Transition>
	);
};

export default modal;
