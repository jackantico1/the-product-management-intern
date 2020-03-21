import React, { Component } from 'react';
import './App.css';
import WelcomeBar from './components/WelcomeBar/WelcomeBar';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Arrow from './components/Arrow/Arrow';

class App extends Component {

  state = {
    apiResponse: ""
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
  }

  componentDidMount() {
      this.callAPI();
  }

  render() {
    return (
      <div className="app">
        <div className="containerOne">
          <WelcomeBar/>
          <NavBar/>
        </div>
        <div className="containerTwo">
          <Arrow direction="left"/>
          <Hero postTitle="Blog Post 1" postText={this.state.apiResponse}/>
          <Arrow direction=""/>
        </div>
      </div>
    );
  }
}

export default App;
