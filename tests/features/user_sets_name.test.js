import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorldContainer from '../../src/HelloWorldContainer';
import { mount } from 'enzyme';

describe('Setting name', () => {
  it('updates displayed name', () => {
    let subject = mount(<HelloWorldContainer />);
    // simulate change does not work with refs
    subject.find('.name-input').get(0).value = 'Tester';
    subject.find('form').simulate('submit');

    expect(subject.text()).toContain('Hello Tester!');
  })
})
