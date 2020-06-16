import React, { useState, useEffect, useRef } from 'react';

import { Option } from './selectOption';

import './styled-select.css'

export const StyledSelect = props => {
	// spreading the props variable
	const { placeholder, options, onChange } = props;
	const [showOptions, setShowOptions] = useState(false)

	// ref
	const ref = useRef(null);

	// state
	const [textValue, setTextValue] = useState(placeholder)

	// handler to get value of selected option
	const getValue = value => {
		const selectedOption = options.filter(option => option.value === value)[0];
		setTextValue(selectedOption.text);
		onChange(selectedOption.value);
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside)
	}, [])

	// handleClick for main component
	const handleClick = () => {
		showOptions ? setShowOptions(false) : setShowOptions(true)
	}

	const handleClickOutside = event => {
		if (ref.current && !ref.current.contains(event.target)) {
			setShowOptions(false)
		}
	}

	return (
		<div className="select-container" onClick={handleClick} ref={ref}>
			<div className="select-input">
				<span className="select-current-value">{textValue}</span>
				{/* icon arrow dropdown */}
				<svg width="16" height="10" preserveAspectRatio="none">
  				<path d="m 0 0 l 6 6 l 6 -6" fill="none" strokeWidth="3" />
				</svg>

			</div>
			{showOptions &&
				<div className="option-container">
					{options.map((option, i) => 
						<Option value={option.value} getValue={getValue}>{option.text}</Option>
					)}
				</div>
			}
		</div>
	)
}