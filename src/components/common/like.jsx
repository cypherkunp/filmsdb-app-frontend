import React, { Component } from 'react';

// Input property: liked: boolean
class Like extends Component {
  render() {
    const { liked, onClick } = this.props;
    let classes = 'fa fa-heart';
    if (!liked) classes += '-o';
    return <i className={classes} style={{ cursor: 'pointer' }} onClick={onClick} />;
  }
}

export default Like;
