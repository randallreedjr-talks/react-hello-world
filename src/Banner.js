// Banner.js
import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    if (this.props.nameSet) {
      return null
    }
    return (
      <div className="Banner-top">Have you set your name yet?</div>
    )
  }
}

Banner.propTypes = {
  nameSet: React.PropTypes.bool.isRequired
}
