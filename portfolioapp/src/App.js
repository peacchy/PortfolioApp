import React from 'react';
import { BrowserRouter } from 'react-router-dom';

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
