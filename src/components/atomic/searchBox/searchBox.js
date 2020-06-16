import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { SearchResultItem } from './searchResultItem';

import { fetchSearchName } from 'utils/fetchAPI';
import './searchbox.css'

export const SearchBox = () => {
	let timeout = null;

	// state
	const [searchResult, setSearchResult] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	// event handler
	const handleKeyUp = e => {
		const value = e.target.value;
		clearTimeout(timeout);
		if (value) {
			timeout = setTimeout(
				function() {
					setIsLoading(true);
					fetchSearchName(value)
						.then(result => {
							setSearchResult(result)	;
							setIsLoading(false)
						})
						.catch(error => {
							setSearchResult('Not found')
						})
				}, 1000)
		} else {
			setSearchResult([])
		}
	}

	return (
		<div className="searchbox-container">
			<FontAwesomeIcon icon={faSearch} />
			<input type="text" placeholder="Search for country" onKeyUp={handleKeyUp} />
			<div className="search-result">
				{/*!isLoading && searchResult.length !== 0
					?
						searchResult.map((item, i) => <SearchResultItem {...item} />)
					:
						<p>{searchResult}</p>
				*/}
				{searchResult !== [] && <p>{searchResult}</p>}
			</div>
		</div>
	)
}