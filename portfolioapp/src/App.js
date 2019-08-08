import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Menu from './containers/menu/Menu';
import Header from './containers/header/Header';
import AboutMe from './components/about-me/AboutMe';

import './App.css';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          {/* <Menu />
          <Header /> */}
        </header>
        <AboutMe />


        {/* <Route path="/" exact render={() => <p>Start page</p>} /> */}
        {/* <Route path="/dummy" exact component={DummyComponent} /> */}
      </BrowserRouter>

    </div>
  );
}

export default App;
