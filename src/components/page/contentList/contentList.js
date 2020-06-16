import React, { Fragment, useState } from 'react';

import { InputContainer } from 'components/container';
import { CardGroup } from 'components/container';

export const ContentList = () => {

	//useEffect(() => console.log('main'))
	const [country, setCountry] = useState('');

	const changeCountry = value => {
		setCountry(value);
	}
  return (
    <Fragment>
      <InputContainer changeCountry={changeCountry} />
      <CardGroup country={country} />
    </Fragment>
  )
}