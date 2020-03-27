import React, { Component } from 'react';
import './Hero.css';

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <h1>{this.props.postTitle}</h1>
        <p>
          TLDR: I applied to 60 diffrent PM internships.
        </p>
      </div>
    );
  }
}

export default Hero;