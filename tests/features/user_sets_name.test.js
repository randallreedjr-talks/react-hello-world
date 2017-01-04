import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorldContainer from '../../src/HelloWorldContainer';
import { mount } from 'enzyme';

describe('Setting name', () => {
  it('updates displayed name', () => {
    let subject = mount(<HelloWorldContainer />);
    // simulate change does not work with refs
    subject.find('.name-link').simulate('click');
    subject.find('.name-input').get(0).value = 'Tester';
    subject.find('form').simulate('submit');

    expect(subject.text()).toContain('Hello Tester!');
  })
})
describe('Canceled setting name', () => {
  it('does not update displayed name', () => {
    let subject = mount(<HelloWorldContainer />);
    // simulate change does not work with refs
    subject.find('.name-link').simulate('click');
    subject.find('.name-input').get(0).value = 'Tester';
    subject.find('.Button--link-cancel').simulate('click');

    expect(subject.text()).toContain('Hello Randall!');
    expect(subject.text()).not.toContain('Please enter your name');
  })
})
