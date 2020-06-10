import React, { Fragment, useState } from 'react';

import { InputContainer } from 'components/inputContainer/inputContainer';
import { CardGroup } from 'components/cardGroup/cardGroup';

export const ContentList = () => {

	//useEffect(() => console.log('main'))
	const [country, setCountry] = useState('');

	const changeCountry = e => {
		console.log(e.target.value);
		setCountry(e.target.value);
	}
  return (
    <Fragment>
      <InputContainer changeCountry={changeCountry} />
      <CardGroup country={country} />
    </Fragment>
  )
}