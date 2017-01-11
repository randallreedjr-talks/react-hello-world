import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from '../../src/HelloWorld';
import HelloWorldContainer from '../../src/HelloWorldContainer';
import { mount } from 'enzyme';
import {Provider} from 'mobx-react';
import HelloStore from '../../src/HelloStore.js';

describe('HelloWorldContainer', () => {
  it('renders HelloWorld component', () => {
    let subject = mount(
      <Provider store={new HelloStore()}>
        <HelloWorldContainer
          onSubmit={() => {}}
          onCancel={() => {}}
          onClick={() => {}}
          modalIsOpen={false}
        />
      </Provider>
    );

    expect(subject.find(HelloWorld).length).toEqual(1);
  });

  it('displays provided name', () => {
    const nameStore = new HelloStore();
    nameStore.setName('Randall');
    const subject = mount(
      <Provider store={nameStore}>
        <HelloWorldContainer
          onSubmit={() => {}}
          onCancel={() => {}}
          onClick={() => {}}
          modalIsOpen={false}
        />
      </Provider>
    );

    expect(subject.text()).toContain('Hello Randall!');
  });
});
