import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, render } from 'enzyme';
import App from '.';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });

  it('renders 2 Score components', () => {
    const component = render(<App />);
    expect(component.find('div.Score').length).toEqual(2);
  })

  it('renders 1 Board component', () => {
    const component = render(<App />);
    expect(component.find('div.Board').length).toEqual(1);
  })
});
