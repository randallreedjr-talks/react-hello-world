import React from 'react';
import ReactDOM from 'react-dom';
import Banner from '../../src/Banner';
import { shallow } from 'enzyme';

it('renders prompt when name not set', () => {
  let subject = shallow(<Banner nameSet={false} />);
  expect(subject.text()).toContain('Have you set your name yet?');
});

it('renders nothing when name is set', () => {
  let subject = shallow(<Banner nameSet={true} />);
  expect(subject.text()).toEqual('');
})
