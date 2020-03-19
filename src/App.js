import React, { Component } from 'react';
import './App.css';
import WelcomeBar from './components/WelcomeBar/WelcomeBar';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';

class App extends Component {
  render() {
    return (
      <div className="app">
        <WelcomeBar/>
        <NavBar/>
        <Hero/>
      </div>
    );
  }
}

export default App;
