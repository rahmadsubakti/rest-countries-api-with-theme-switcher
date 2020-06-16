import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { fetchCodeCountry } from 'utils/fetchAPI';

import './country-detail.css';

export const CountryDetail = () => {
	const { code } = useParams();
	// state
	const [detail, setDetail] = useState({});

	useEffect(() => {
		fetchCodeCountry(code)
			.then(result => setDetail(result))
	}, [code])

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
			borders
		} = detail;

		return (
			<div className="detail-page">
				{/*Replace button with link*/}
				<Link to="/" className="back"><FontAwesomeIcon icon={faArrowLeft} />Back</Link>
				<div className="detail-container">
					<div className="img-container">
						<img src={flag} alt={flag} />
					</div>
					<div className="detail-info">
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
						<Border bordersCode={borders} />				
					</div>
				</div>
			</div>
		)
	}
	return null;
}

const Border = props => {
	const { bordersCode } = props;
	// state
	const [bordersName, setBordersName] = useState([]);

	useEffect(() => {
		if (bordersCode) {
			fetch('https://restcountries.eu/rest/v2/all')
			.then(response => response.json())
			.then(result => result.filter(item => bordersCode.includes(item.alpha3Code)).map(item => item.name))
			.then(result => setBordersName(result))
		}
	}, [bordersCode]);

	return (
		<table>
			<tbody>
				<tr>
					<td><b>Border Countries:</b></td>
					<td className='span-list'>{bordersName.map((item, idx) => <span key={'border'+idx}>{item}</span>)}</td>
				</tr>
			</tbody>
		</table>
	)
}