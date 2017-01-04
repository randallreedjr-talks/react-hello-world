import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from '../../src/Sidebar';
import { shallow } from 'enzyme';

it('renders sidebar label with name', () => {
  let subject = shallow(<Sidebar name={'Tester'} />);
  expect(subject.text()).toContain('Tester\'s Sidebar');
});

it('renders empty label when name is not set', () => {
  let subject = shallow(<Sidebar name={''} />);
  expect(subject.text()).toEqual('\'s Sidebar');
})
