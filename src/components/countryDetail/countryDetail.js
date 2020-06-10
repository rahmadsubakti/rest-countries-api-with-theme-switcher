import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { fetchCodeCountry, fetchCountryNameCode } from 'utils/fetchAPI';

import './country-detail.css';

export const CountryDetail = () => {
	const { code } = useParams();
	// state
	const [detail, setDetail] = useState({});

	useEffect(() => {
		fetchCodeCountry(code)
			.then(result => setDetail(result))
			//.then(() => document.title = 'Countries | ' +detail.name)
	})

	if (detail !== {}) {
		let {
			flag,
			name,
			nativeName,
			population,
			region,
			subregion,
			capital,
			topLevelDomain,
			currencies,
			languages,
		} = detail;

		return (
			<div className="detail-page">
				{/*Replace button with link*/}
				<Link to="/" className="back"><FontAwesomeIcon icon={faArrowLeft} />Back</Link>
				<div className="detail-container">
					<div className="img-container">
						<img src={flag} alt={flag} />
					</div>
					<div class="detail-info">
						<h2>{name}</h2>
						<ul>
							<li><b>Native Name:</b> {nativeName}</li>
							<li><b>Population:</b> {population}</li>
							<li><b>Region:</b> {region}</li>
							<li><b>Sub Region:</b> {subregion}</li>
							<li><b>Capital:</b> {capital}</li>
							<li><b>Top Level Domain:</b> {topLevelDomain}</li>
							<li><b>Currencies:</b> {currencies}</li>
							<li><b>Languages:</b> {languages}</li>
						</ul>
						<p><b>Border Countries:</b> <span>France</span><span>Germany</span><span>Netherlands</span></p>
					</div>
				</div>
			</div>
		)
	}
	return null;
}