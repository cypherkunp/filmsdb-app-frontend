import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import './App.css';

import Movies from './movie';
import NavBar from './navbar';
import Home from './home';
import Customers from './customers';
import Rentals from './rentals';
import PageNotFound from './error/page-not-found';
import MovieDetails from './movie-details';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container m-5">
          <Switch>
            <Route path="/movies/:id" component={MovieDetails} />
            <Route path="/movies" component={Movies} />
            <Route path="/home" component={Home} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/page-not-found" component={PageNotFound} />
            <Redirect from="/" exact to="/home" />
            <Redirect to="/page-not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
