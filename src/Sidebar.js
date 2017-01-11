// Sidebar.js
import React, { Component } from 'react';

export default class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar-left">{this.props.name}'s Sidebar</div>
    )
  }
};

Sidebar.propTypes = {
  name: React.PropTypes.string.isRequired
}
