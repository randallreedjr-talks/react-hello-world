// Banner.js
import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';

const Banner = inject('store')(observer(class Banner extends Component {
  render() {
    if (this.props.store.nameSet) {
      return null
    }
    return (
      <div className="Banner-top">Have you set your name yet?</div>
    )
  }
}));

export default Banner;
