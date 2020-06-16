import React from 'react';

import { StyledSelect } from 'components/atomic';

export const DropDown = props => {
	const onChange = props.onChange;

	const options = [
    {value: 'africa', text: 'Africa'},
    {value: 'americas', text: 'America'},
    {value: 'asia', text: 'Asia'},
    {value: 'europe', text: 'Europe'},
    {value: 'oceania', text: 'Oceania'}
  ]

	return <StyledSelect 
						options={options}
						placeholder="Filter by Region"
						onChange={onChange}
					/>
}

/*export const StyledSelect = () => {

	// state
	const [value, setValue] = useState('Select option...');

	return (
		<div class="select-container">
			<div class="select-input">
				{value}
			</div>
			<div class="select-option-container">
				<div class="select-option">Option 1</div>
				<div class="select-option">Option 2</div>
				<div class="select-option">Option 3</div>
			</div>
		</div>
	)
}*/