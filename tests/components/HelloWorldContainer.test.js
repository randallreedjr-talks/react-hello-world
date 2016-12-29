import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from '../../src/HelloWorld';
import HelloWorldContainer from '../../src/HelloWorldContainer';
import { shallow, mount } from 'enzyme';

describe('HelloWorldContainer', () => {
  it('renders HelloWorld component', () => {
    let subject = shallow(<HelloWorldContainer name='Tester' />);

    expect(subject.find(HelloWorld).length).toEqual(1);
  });

  it('does not set a default name', () => {
    let subject = mount(<HelloWorldContainer name='Tester' />);

    expect(subject.text()).toContain('Hello World!');
  });
});
