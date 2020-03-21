import React, { Component } from 'react';
import './Hero.css';

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <h1>{this.props.postTitle}</h1>
        <p>postText is: {this.props.postText}</p>
      </div>
    );
  }
}

export default Hero;