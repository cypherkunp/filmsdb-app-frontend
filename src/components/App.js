import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import './App.css';

import Movies from './movie';
import NavBar from './navbar';
import Login from './login';
import Customers from './customers';
import Rentals from './rentals';
import PageNotFound from './error/page-not-found';
import MovieDetails from './movie-details';
import Register from './register';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container m-5">
          <Switch>
            <Route path="/movies/:id" component={MovieDetails} />
            <Route path="/movies" component={Movies} />
            <Route path="/login" component={Login} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/register" component={Register} />
            <Route path="/page-not-found" component={PageNotFound} />
            <Redirect from="/" exact to="/login" />
            <Redirect to="/page-not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
