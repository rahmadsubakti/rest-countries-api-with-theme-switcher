import React from 'react';
import { Link } from 'react-router-dom';

import './country-card.css';

export const CountryCard = props => {
	const url = `/alpha/${props.code}`
	const style = {backgroundImage: `url(${props.flag})`}
	return (
		<Link to={url}>
			<div className="card">
				<div className="img-container" style={style}>
				</div>
				<div className="card-info">
					<div className="name">
						<h3>{props.name}</h3>
					</div>
					<p>Population: <span>{props.population}</span></p>
					<p>Region: <span>{props.region}</span></p>
					<p>Capital: <span>{props.capital}</span></p>
				</div>
			</div>
		</Link>
	)
}