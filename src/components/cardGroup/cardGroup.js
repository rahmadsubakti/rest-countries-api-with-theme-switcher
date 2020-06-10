import React, { useState, useEffect } from 'react';

import { CountryCard } from 'components/countryCard/countryCard';

import './card-group.css'

export const CardGroup = props => {
	//state
	const [list, setList] = useState([]);
	const [currentList, setCurrentList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const { country } = props;
	useEffect(() => {
		console.log('fetched')
		fetch('https://restcountries.eu/rest/v2/all')
			.then(response => response.json())
			.then(result => result.map(item => ({
						name:  item.name,
						population: item.population,
						region: item.region,
						capital: item.capital,
						flag: item.flag,
						code: item.alpha3Code.toLowerCase()
					})
			))
			.then(result => {
				setList(result)
				setCurrentList(result)
				setIsLoading(false)
			})		
	}, [])

	useEffect(() => {
			if (country !== '') {
				let filteredList = list.filter(item => item.region.toLowerCase() === country);
				setCurrentList(filteredList)
			} else {
				setCurrentList(list);
			}
		}, [country])

	return (
		<div className="cardgroup">
			{currentList.map(item => <CountryCard {...item} />)}
		</div>
	)
}