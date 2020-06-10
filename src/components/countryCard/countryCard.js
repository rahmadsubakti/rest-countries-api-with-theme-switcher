import React from 'react';
import { Link } from 'react-router-dom';

import './country-card.css';

export const CountryCard = props => {
	const url = `/alpha/${props.code}`
	return (
		<Link to={url}>
			<div className="card">
				<div className="img-container">
					<img src={props.flag} alt="flag" />
				</div>
				<div className="card-info">
					<h3>{props.name}</h3>
					<p>Population: <span>{props.population}</span></p>
					<p>Region: <span>{props.region}</span></p>
					<p>Capital: <span>{props.capital}</span></p>
				</div>
			</div>
		</Link>
	)
}