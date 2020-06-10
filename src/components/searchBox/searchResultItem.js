import React from 'react';
import { Link } from 'react-router-dom';
import './search-result-item.css';

export const SearchResultItem = props => {
	const { code, name, flag } = props;
	return (
		<Link to={`/alpha/${code}`}>
			<div className="search-result__item">
				<div className="img-container">
					<img src={flag} alt={flag} />
				</div>
				<h4>{name}</h4>
			</div>
		</Link>
	)
}