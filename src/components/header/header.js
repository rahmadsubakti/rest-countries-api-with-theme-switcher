import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

import './header.css';

export const Header = props => {
	const { handleClick } = props;

	return (
		<header>
			<h1 className="logo">Where in the world</h1>
			<button 
				className="toggle-theme__btn" 
				onClick={handleClick}>
					<FontAwesomeIcon icon={faMoon} />Dark mode
			</button>
		</header>
	)
}