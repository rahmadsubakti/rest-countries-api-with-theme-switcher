import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Header } from 'components/header/header';
import { ContentList } from 'components/contentList/contentList';
import { CountryDetail } from 'components/countryDetail/countryDetail'

import logo from './logo.svg';
import './App.css';

function App() {
  const [themeContext, setThemeContext] = useState('light')

  useEffect(() => document.documentElement.setAttribute('theme', themeContext))

  const handleClick = () => {
    themeContext === 'light' ? setThemeContext('dark') : setThemeContext('light');
  }

  return (
    <Router>
      <Header handleClick={handleClick} />
      <main>
        <Switch>
          <Route exact path='/' children={<ContentList />} title='Countries' />
          <Route path='/alpha/:code' children={<CountryDetail />} />
        </Switch>
      </main>
    </Router>
  )
}

export default App;