import React, { Component } from 'react';
import Modal from './Modal/Modal.js'
import ModalBody from './Modal/ModalBody.js'
import ModalHeader from './Modal/ModalHeader.js'
import ModalFooter from './Modal/ModalFooter.js'

export default class ModalContainer extends Component {
  render() {
    return (
      <Modal isOpen={this.props.modalIsOpen}>
        <ModalHeader text="Please enter your name" showCloseButton onClose={this.toggleModal} />
        <form onSubmit={(e) => this.props.onSubmit(e, this.nameInput)}>
          <ModalBody>
              <label htmlFor="input__username">Name: </label>
              <input
                className="name-input"
                type="text"
                id="input__username"
                placeholder="Enter your name"
                defaultValue={this.props.name}
                ref={(input) => this.nameInput = input}
              />
          </ModalBody>
          <ModalFooter>
            <button className="Button Button--primary name-submit" type="submit">Update</button>
            <button className="Button Button--link-cancel" type="button" onClick={this.props.onCancel}>Cancel</button>
          </ModalFooter>
        </form>
      </Modal>
    )
  }
}

ModalContainer.propTypes = {
  name: React.PropTypes.string.isRequired,
  modalIsOpen: React.PropTypes.bool.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
  onCancel: React.PropTypes.func.isRequired
}
