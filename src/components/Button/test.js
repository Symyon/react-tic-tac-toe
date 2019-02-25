import React from 'react';
import { shallow } from 'enzyme';
import Button from './';

describe('Button', () => {
    it('render correctly without props', () => {
        const component = shallow(<Button />);

        expect(component).toMatchSnapshot();
    })

    it('render text correctly with a given value', () => {
        const component = shallow(<Button text='Button' />);
        expect(component).toMatchSnapshot();
    });

    it('renders correctly for an existing onClick function', () => {
        const onClick = jest.fn();
        const component = shallow(<Button onClick={onClick} />);
        expect(component).toMatchSnapshot();
    });

    it('renders correctly for a null onClick function', () => {
        const component = shallow(<Button onClick={null} />);
        expect(component).toMatchSnapshot();
    });
});