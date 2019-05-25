import React, { Component } from 'react';
import Movies from './movie';
import NavBar from './navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container m-5">
          <Movies />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
