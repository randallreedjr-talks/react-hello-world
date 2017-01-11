// HelloStore.js
import {extendObservable} from 'mobx';

export default class HelloStore {
  constructor() {
    extendObservable(this, {
      name: '',
      nameSet: false,
      isModalOpen: false
    })
  }

  setName(name) {
    this.name = name;
    this.nameSet = (name !== '');
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}



//   handleSubmit(e, nameInput) {
//     e.preventDefault();
//     // Imagine an ajax call to update name to server
//     // this.setState({
//     //   name: nameInput.value,
//     //   nameSet: true,
//     //   modalIsOpen: false
//     // });
//     this.name = nameInput.value;
//     this.nameSet = true;
//     this.modalIsOpen = false;
//   }
//
//   handleCancel() {
//     // this.setState({ modalIsOpen: false });
//     this.modalIsOpen = false;
//   }
//
//   handleClick(e) {
//     e.preventDefault();
//     // this.setState({ modalIsOpen: true });
//     this.modalIsOpen = true;
//   }
// }
