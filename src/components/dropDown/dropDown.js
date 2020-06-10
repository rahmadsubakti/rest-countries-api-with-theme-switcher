import React from 'react';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import './dropdown.css';

export const DropDown = props => {
	const onChange = props.onChange;
	return (
			<select className="dropdown-container" onChange={onChange} defaultValue=''>
				<option value=''>Filter by Region</option>
				<option value="africa">Africa</option>
				<option value="americas">America</option>
				<option value="asia">Asia</option>
				<option value="europe">Europe</option>
				<option value="oceania">Oceania</option>
			</select>
	)
}

/*export const DropDown = () => {
	const options = [
		{value: 'africa', label: 'Africa'},
		{value: 'america', label: 'America'},
		{value: 'asia', label: 'Asia'},
		{value: 'europe', label: 'Europe'},
		{value: 'oseania', label: 'Oseania'}
	]

	const customStyles = {
		option: (provided, state) => ({
			...provided,
			backgroundColor: 'var(--element-bg)',
			color: 'var(--text)',
		}),
		control: () => ({
			width: '15%'
		}),
		singleValue: (provided, state) => ({
			...provided,
			color: 'var(--text)'
		})
	} 

	return <Select options={options} className='select-container' />
}*/