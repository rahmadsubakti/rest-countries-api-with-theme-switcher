import React from 'react';

import { SearchBox } from 'components/searchBox/searchBox';
import { DropDown } from 'components/dropDown/dropDown';

import './input-container.css'

export const InputContainer = props => {
	return (
		<div className="input-container">
			<SearchBox />
			<DropDown onChange={props.changeCountry} />
		</div>
	)
}