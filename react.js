/*
  You'll need React dependencies for this code. We recommend you just use something like https://stackblitz.com/.
*/

import React, { Component } from 'react';
import { render } from 'react-dom';

const data = {
  "sc5ba": {
    "username": "sc5ba",
    "first_name": "Srikanth",
    "last_name": "Chelluri",
    "major": "Computer Engineering",
    "image": "https://pbs.twimg.com/profile_images/453536638657101824/ADOJxIGY_400x400.jpeg"
  },
  "ng3br": {
    "username": "ng3br",
    "first_name": "Nikhil",
    "last_name": "Gupta",
    "major": "Computer Science",
    "image": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/5/000/221/1ee/34a1bb5.jpg"
  }
};

class ProfileCard extends Component {
  constructor(props) {
    super(props);

    this.handleHideClick = this.handleHideClick.bind(this);
    this.handleSwitchClick = this.handleSwitchClick.bind(this);

    this.state = {
      show: true,
      data: data[this.props.username]
    };
  }

  handleHideClick() {
    this.setState({
      show: false
    });
  }

  handleSwitchClick() {
    let newUsername = this.state.data.username == "sc5ba" ? "ng3br" : "sc5ba";
    this.setState({
      data: data[newUsername]
    });
  }

  render() {
    if (!this.state.show) {
      return null;
    } else {
      return (
        <div>
          <h1>{this.state.data.first_name} {this.state.data.last_name}</h1>
          <h3>{this.state.data.major}</h3>
          <img src={this.state.data.image}></img>
          <br />
          <button onClick={this.handleHideClick}>Hide card</button>
          <button onClick={this.handleSwitchClick}>Switch card</button>
        </div>
      );
    }
  }
}

render(<ProfileCard username="sc5ba" />, document.getElementById('root'));