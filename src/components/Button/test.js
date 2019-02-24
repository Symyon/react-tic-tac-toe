import React from 'react';
import { shallow } from 'enzyme';
import Button from './';

describe('Button', () => {
    it('render correctly without props', () => {
        const component = shallow(<Button />);

        expect(component).toMatchSnapshot();
    })
});