import React from 'react';
import App from '../../../src/components/App';

describe('Positive Workflow', () => {
  it('should render App', () => {
    const mockFunc = jest.fn();
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
