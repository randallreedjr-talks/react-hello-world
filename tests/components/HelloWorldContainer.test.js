import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from '../../src/HelloWorld';
import HelloWorldContainer from '../../src/HelloWorldContainer';
import { shallow, mount } from 'enzyme';

describe('HelloWorldContainer', () => {
  it('renders HelloWorld component', () => {
    let subject = shallow(
      <HelloWorldContainer
        name=''
        onSubmit={() => {}}
        onCancel={() => {}}
        onClick={() => {}}
        modalIsOpen={false}
      />
    );

    expect(subject.find(HelloWorld).length).toEqual(1);
  });

  it('displays provided name', () => {
    let subject = mount(
      <HelloWorldContainer
        name='Randall'
        onSubmit={() => {}}
        onCancel={() => {}}
        onClick={() => {}}
        modalIsOpen={false}
      />
    );

    expect(subject.text()).toContain('Hello Randall!');
  });
});
