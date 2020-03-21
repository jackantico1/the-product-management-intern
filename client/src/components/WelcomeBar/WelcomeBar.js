import React, { Component } from 'react';
import './WelcomeBar.css';

class WelcomeBar extends Component {
    render() {
        return (
            <div className="welcomeBar">
              <div className="barOne"></div>
              <div className="barTwo"></div>
            </div>
          );
    }
}

export default WelcomeBar;