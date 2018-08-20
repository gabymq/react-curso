import React, { Component } from 'react';
import './App.css';
import Header from './header';
import Banner from './banner';
import TitleList from './titleList';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <TitleList />

      </div>
    );
  }
}

export default App;
