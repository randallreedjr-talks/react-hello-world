import React from 'react';
import ReactDOM from 'react-dom';
import ModalContainer from '../../src/ModalContainer';
import Modal from '../../src/Modal/Modal';
import { shallow, mount } from 'enzyme';

describe('ModalContainer', () => {
  it('renders Modal component', () => {
    let subject = shallow(<ModalContainer modalIsOpen={false} onSubmit={() => {}} onCancel={() => {}} />);

    expect(subject.find(Modal).length).toEqual(1);
  });

  it('is hidden when modalIsOpen is false', () => {
    let subject = mount(<ModalContainer modalIsOpen={false} onSubmit={() => {}} onCancel={() => {}} />);

    expect(subject.text()).not.toContain('Please enter your name');
  });

  it('is displayed when modalIsOpen is true', () => {
    let subject = mount(<ModalContainer modalIsOpen={true} onSubmit={() => {}} onCancel={() => {}} />);

    expect(subject.text()).toContain('Please enter your name');
  });

  context('callbacks', () => {
    it('triggers submit callback when submitted', () => {
      const submitCallback = jest.fn();
      const cancelCallback = jest.fn();
      let subject = mount(
        <ModalContainer
          modalIsOpen={true}
          onSubmit={submitCallback}
          onCancel={cancelCallback}
        />
      );
      subject.find('form').simulate('submit');

      expect(submitCallback).toHaveBeenCalled();
      expect(cancelCallback).not.toHaveBeenCalled();
    });

    it('triggers cancel callback when cancelled', () => {
      const submitCallback = jest.fn();
      const cancelCallback = jest.fn();
      let subject = mount(
        <ModalContainer
          modalIsOpen={true}
          onSubmit={submitCallback}
          onCancel={cancelCallback}
        />
      );
      subject.find('.Button--link-cancel').simulate('click');

      expect(submitCallback).not.toHaveBeenCalled();
      expect(cancelCallback).toHaveBeenCalled();
    });
  });
});
