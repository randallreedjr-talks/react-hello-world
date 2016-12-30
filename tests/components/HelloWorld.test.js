import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from '../../src/HelloWorld';
import { shallow } from 'enzyme';

describe('HelloWorld', () => {
  it('displays greeting with provided name', () => {
    let subject = shallow(
      <HelloWorld name='Tester'
        onSubmit={() => {}}
        onClick={() => {}}
        editMode={false}
      />
    );

    expect(subject.text()).toContain('Hello Tester!');
  });
});
