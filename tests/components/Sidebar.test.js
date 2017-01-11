import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { Provider } from 'mobx-react';

import Sidebar from '../../src/Sidebar';
import HelloStore from '../../src/HelloStore';

it('renders sidebar label with name', () => {
  const nameStore = new HelloStore();
  nameStore.setName('Tester');
  const subject = mount(<Sidebar name={'Tester'} />);
  expect(subject.text()).toContain('Tester\'s Sidebar');
});

it('renders empty label when name is not set', () => {
  const nameStore = new HelloStore();
  const subject = mount(<Sidebar name={''} />);
  expect(subject.text()).toEqual('\'s Sidebar');
})
