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
                <h3 className="subHeaderText">How to get a product management internship and what they are like</h3>
              </div>
            </div>
          );
    }
}

export default WelcomeBar;