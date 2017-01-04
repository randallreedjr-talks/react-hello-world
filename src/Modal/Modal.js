import React, { Component } from 'react';

export default class Modal extends Component {
  render() {
    if(this.props.isOpen) {
      return (
        <div>
          <div className={`Modal-backdrop ${this.props.isOpen ? 'modal-open' : ''}`}></div>
          <div className={`Modal ${this.props.isOpen ? 'modal-open' : ''}`}>
            <div className="Modal-dialog">
              <div className="Modal-content">{this.props.children}</div>
            </div>
          </div>
        </div>
      );
    }
    return <div></div>;
  }
}

Modal.propTypes = {
  isOpen: React.PropTypes.bool.isRequired
}
