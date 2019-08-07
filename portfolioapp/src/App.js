import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Menu from './containers/Menu';

import './App.css';
import DummyComponent from './containers/DummyComponent';

import Header from "./containers/header/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
      <BrowserRouter>
        <Menu />

        <Route path="/" exact render={() => <h1>Start page</h1>} />
        <Route path="/dummy" exact component={DummyComponent} />
      </BrowserRouter>

    </div>
  );
}

export default App;
