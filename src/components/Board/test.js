import React from 'react';
import { shallow } from 'enzyme';
import Board from './';

describe('Board', () => {
    it('render correctly without props', () => {
        const component = shallow(<Board />);
        expect(component).toMatchSnapshot();
    })
});