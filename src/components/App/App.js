import React, { Component } from 'react';
import './App.css';
import LunchContainer from '../../components/LunchContainer/LunchContainer.js'

class App extends Component {
  render() {

    return (
      <div className="App">
        <h1>Friday Lunch Delivery</h1>
        <LunchContainer></LunchContainer>
      </div>
    );
  }
}

export default App