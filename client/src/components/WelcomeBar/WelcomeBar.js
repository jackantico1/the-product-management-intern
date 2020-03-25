import React, { Component } from 'react';
import './WelcomeBar.css';

class WelcomeBar extends Component {
    render() {
        return (
            <div className="welcomeBar">
              <div className="barOne">
                <h1 className="headerText">The Product Management Intern</h1>
              </div>
              <div className="barTwo">
                <p>How to get a product management internship and what they are like</p>
              </div>
            </div>
          );
    }
}

export default WelcomeBar;