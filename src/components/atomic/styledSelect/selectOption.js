import React from 'react';

export const Option = props => {

	// handleClick for option to pass value to parent
	const handleClick = e => {
		props.getValue(props.value);
	}

	return (
		<div className="select-option" onClick={handleClick}>
			{ props.children }
		</div>
	)
}