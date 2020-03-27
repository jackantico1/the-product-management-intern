import React, { Component } from 'react';
import './App.css';
import WelcomeBar from './components/WelcomeBar/WelcomeBar';
//import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
//import Arrow from './components/Arrow/Arrow';

class App extends Component {

  state = {
    postTitle: "How I Got a PM Internship",
  }

  render() {
    return (
      <div className="app">
        <div className="containerOne">
          <WelcomeBar/>
          {/* <NavBar/> */}
        </div>
        <div className="containerTwo">
          {/* <Arrow direction="left"/> */}
          <Hero postTitle={this.state.postTitle}/>
          {/* <Arrow direction=""/> */}
        </div>
      </div>
    );
  }
}

export default App;
