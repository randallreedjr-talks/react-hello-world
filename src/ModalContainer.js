import React, { Component } from 'react';
import Modal from './Modal/Modal.js'
import ModalBody from './Modal/ModalBody.js'
import ModalHeader from './Modal/ModalHeader.js'
import ModalFooter from './Modal/ModalFooter.js'

export default class ModalContainer extends Component {
  render() {
    return (
<<<<<<< 1f13b2f38c148830efce5ddadfa7c7f5c5dd57d0
=======
      // <Modal isOpen={this.state.modalIsOpen} onCancel={this.toggleModal} backdropClosesModal>
>>>>>>> Display form in modal
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
  modalIsOpen: React.PropTypes.bool.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
  onCancel: React.PropTypes.func.isRequired
}
