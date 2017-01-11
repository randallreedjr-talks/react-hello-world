import React, { Component } from 'react';
import { inject, observer} from 'mobx-react';

import Modal from './Modal/Modal.js'
import ModalBody from './Modal/ModalBody.js'
import ModalHeader from './Modal/ModalHeader.js'
import ModalFooter from './Modal/ModalFooter.js'

// export default class ModalContainer extends Component {
const ModalContainer = inject('store')(observer(class ModalContainer extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleSubmit(e, nameInput) {
    e.preventDefault();
    // Imagine an ajax call to update name to server
    this.props.store.setName(nameInput.value);
    this.props.store.closeModal();
  }

  handleCancel() {
    this.props.store.closeModal();
  }

  render() {
    return (
      <Modal isOpen={this.props.store.isModalOpen}>
        <ModalHeader text="Please enter your name" showCloseButton onClose={this.toggleModal} />
        <form onSubmit={(e) => this.handleSubmit(e, this.nameInput)}>
          <ModalBody>
              <label htmlFor="input__username">Name: </label>
              <input
                className="name-input"
                type="text"
                id="input__username"
                placeholder="Enter your name"
                defaultValue={this.props.store.name}
                ref={(input) => this.nameInput = input}
              />
          </ModalBody>
          <ModalFooter>
            <button className="Button Button--primary name-submit" type="submit">Update</button>
            <button className="Button Button--link-cancel" type="button" onClick={this.handleCancel}>Cancel</button>
          </ModalFooter>
        </form>
      </Modal>
    )
  }
}));

export default ModalContainer;
