import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import './App.css';

import MoviesPage from './movie-page';
import NavBar from './navbar';
import LoginPage from './login-page';
import PageNotFound from './error/page-not-found';
import MovieDetails from './movie-details';
import CustomersPage from './customers-page';
import RegistrationPage from './registration-page';
import RentalsPage from './rentals-page';
import NewMoviePage from './new-movie-page';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container m-5">
          <Switch>
            <Route path="/movies/new" component={NewMoviePage} />
            <Route path="/movies/:id" component={MovieDetails} />
            <Route path="/movies" component={MoviesPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/customers" component={CustomersPage} />
            <Route path="/rentals" component={RentalsPage} />
            <Route path="/register" component={RegistrationPage} />
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
