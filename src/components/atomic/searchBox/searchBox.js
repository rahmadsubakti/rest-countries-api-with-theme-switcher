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

	// event handler
	const handleKeyUp = e => {
		const value = e.target.value;
		clearTimeout(timeout);
		if (value) {
			timeout = setTimeout(
				function() {
					fetchSearchName(value)
						.then(result => {
							setSearchResult(result)	;
						})
						.catch(error => {
							setSearchResult('404')
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
				{Array.isArray(searchResult) && searchResult.length !== 0
					?
						searchResult.map((item, i) => <SearchResultItem {...item} />)
					:
						searchResult === '404' && <p>Not found</p>
				}
			</div>
		</div>
	)
}