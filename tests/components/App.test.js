import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../src/App';
import { mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('defaults name to New User', () => {
  let subject = mount(<App />);

  expect(subject.text()).toContain('Hello New User!');
  expect(subject.text()).toContain('New User\'s Sidebar');
});
