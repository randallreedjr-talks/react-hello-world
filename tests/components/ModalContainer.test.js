import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { Provider } from 'mobx-react';

import HelloStore from '../../src/HelloStore';
import ModalContainer from '../../src/ModalContainer';
import Modal from '../../src/Modal/Modal';

describe('ModalContainer', () => {
  it('renders Modal component', () => {
    const nameStore = new HelloStore();
    const subject = mount(
      <Provider store={nameStore} >
        <ModalContainer onSubmit={() => {}} onCancel={() => {}} />
      </Provider>
    );

    expect(subject.find(Modal).length).toEqual(1);
  });

  it('is hidden when modalIsOpen is false', () => {
    const nameStore = new HelloStore();
    const subject = mount(
      <Provider store={nameStore} >
        <ModalContainer onSubmit={() => {}} onCancel={() => {}} />
      </Provider>
    );

    expect(subject.text()).not.toContain('Please enter your name');
  });

  it('is displayed when modalIsOpen is true', () => {
    const nameStore = new HelloStore();
    nameStore.openModal();
    const subject = mount(
      <Provider store={nameStore} >
        <ModalContainer onSubmit={() => {}} onCancel={() => {}} />
      </Provider>
    );

    expect(subject.text()).toContain('Please enter your name');
  });

  context('callbacks', () => {
    it('triggers submit callback when submitted', () => {
      const nameStore = new HelloStore();
      nameStore.openModal();
      const submitCallback = jest.fn();
      const cancelCallback = jest.fn();
      const subject = mount(
        <Provider store={nameStore} >
          <ModalContainer
            onSubmit={submitCallback}
            onCancel={cancelCallback}
          />
        </Provider>
      );
      subject.find('form').simulate('submit');

      expect(submitCallback).toHaveBeenCalled();
      expect(cancelCallback).not.toHaveBeenCalled();
    });

    it('triggers cancel callback when cancelled', () => {
      const nameStore = new HelloStore();
      nameStore.openModal();
      const submitCallback = jest.fn();
      const cancelCallback = jest.fn();
      const subject = mount(
        <Provider store={nameStore} >
          <ModalContainer
            onSubmit={submitCallback}
            onCancel={cancelCallback}
          />
        </Provider>
      );
      subject.find('.Button--link-cancel').simulate('click');

      expect(submitCallback).not.toHaveBeenCalled();
      expect(cancelCallback).toHaveBeenCalled();
    });
  });
});
