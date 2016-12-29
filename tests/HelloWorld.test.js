import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from '../src/HelloWorld';
import { shallow } from 'enzyme';

describe('HelloWorld', () => {
  it('displays Hello World!', () => {
    let subject = shallow(<HelloWorld />);

    expect(subject.text()).toContain('Hello World!');
  });
});
