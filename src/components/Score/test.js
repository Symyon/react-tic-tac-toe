import React from 'react';
import { shallow } from 'enzyme';
import Score from './';

describe('Score', () => {
    it('render correctly without props', () => {
        const component = shallow(<Score />);

        expect(component).toMatchSnapshot();
    })
});