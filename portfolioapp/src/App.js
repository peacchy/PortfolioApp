import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Menu from './containers/menu/Menu';

import './App.css';
import DummyComponent from './containers/DummyComponent';

import Header from "./containers/header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Menu />
          <Header />
        </header>


        <Route path="/" exact render={() => <p>Start page</p>} />
        <Route path="/dummy" exact component={DummyComponent} />
      </BrowserRouter>

    </div>
  );
}

export default App;
