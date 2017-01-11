import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { Provider } from 'mobx-react';

import Banner from '../../src/Banner';
import HelloStore from '../../src/HelloStore';

it('renders prompt when name not set', () => {
  const subject = mount(
    <Provider store={new HelloStore()} >
      <Banner />
    </Provider>
  );
  expect(subject.text()).toContain('Have you set your name yet?');
});

it('renders nothing when name is set', () => {
  const nameStore = new HelloStore();
  nameStore.setName('Tester');
  const subject = mount(
    <Provider store={nameStore} >
      <Banner />
    </Provider>
  );
  expect(subject.html()).toEqual(null);
})
