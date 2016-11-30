import React, { Component } from 'react';
import NavBar from './nav_bar';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}
