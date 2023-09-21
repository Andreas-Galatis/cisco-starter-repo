import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner bannerText="Sextant" />
        <Exhibit name="I'm an exhibit!"></Exhibit>
        <Exhibit name="I'm also an exhibit"></Exhibit>
        <Exhibit name="Don't forget aboout mr, I'm also an exhibit tool!"></Exhibit>
      </div>
   ); 
  }
}

export default App;
