import React, { Component } from 'react';

class Breadcrumb extends Component {
  render() {
    const { navigations } = this.props;

    return (
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href={navigations.url}>{navigations.label}</a>
          </li>
          <li class="breadcrumb-item">
            <a href="#">Library</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Data
          </li>
        </ol>
      </nav>
    );
  }
}

export default Breadcrumb;
