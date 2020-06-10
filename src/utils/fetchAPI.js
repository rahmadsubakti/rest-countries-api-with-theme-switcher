export const fetchAllCountries = () => {
	fetch('https://restcountries.eu/rest/v2/all')
		.then(response => response.json())
		.then(result => result.map(item => ({
						name:  item.name,
						population: item.population,
						region: item.region,
						capital: item.capital,
						flag: item.flag,
						code: item.alpha3Code
					})
			))
}

export const fetchSearchName = name => {
	return fetch(`https://restcountries.eu/rest/v2/name/${name}`)
		.then(response => response.json())
		.then(result => result.map(item => ({
				name: item.name,
				flag: item.flag,
				code: item.alpha3Code.toLowerCase(),
			})
		))
}

export const fetchCodeCountry = code => {
	return fetch(`https://restcountries.eu/rest/v2/alpha/${code}`)
		.then(response => response.json())
		.then(result => ({
				name: result.name,
				nativeName: result.nativeName,
				flag: result.flag,
				code: result.alpha3Code.toLowerCase(),
				capital: result.capital,
				population: result.population,
				region: result.region,
				subregion: result.subregion,
				topLevelDomain: result.topLevelDomain,
				currencies: result.currencies.map(item => item.name).join(', '),
				languages: result.languages.map(item => item.name).join(', '),
				borders: result.borders
			}
		))
}

export const fetchCountryNameCode = code => {
	return fetch(`https://restcountries.eu/rest/v2/alpha/${code}`)
		.then(response => response.json())
		.then(result => result.name)
}