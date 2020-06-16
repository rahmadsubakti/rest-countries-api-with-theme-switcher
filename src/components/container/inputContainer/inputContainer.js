import React from 'react';

import { SearchBox } from 'components/atomic';
import { DropDown } from 'components/container';

import './input-container.css'

export const InputContainer = props => {
	return (
		<div className="input-container">
			<SearchBox />
			<DropDown onChange={props.changeCountry} />
		</div>
	)
}