import React from 'react';
import { shallow } from 'enzyme';
import Score from './';

describe('Score', () => {
    it('render correctly without props', () => {
        const component = shallow(<Score />);

        expect(component).toMatchSnapshot();
    })

    it('render text correctly with given value', () => {
        const component = shallow(<Score value={5} />);
        expect(component).toMatchSnapshot();
    });
});