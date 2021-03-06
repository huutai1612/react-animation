import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
	const cssClasses = `Backdrop ${
		props.show ? 'BackdropOpen' : 'BackdropClose'
	}`;

	return <div onClick={props.closed} className={cssClasses}></div>;
};

export default backdrop;
