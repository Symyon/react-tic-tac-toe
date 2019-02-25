import React from 'react';
import { shallow } from 'enzyme';
import Board from './';

import { NOUGHT, CROSS, EMPTY, DRAW } from '../../constants';

describe('Board', () => {
    it('render correctly without props', () => {
        const component = shallow(<Board />);
        expect(component).toMatchSnapshot();
    })

    it('renders correctly the overlay when a draw', () => {
        const component = shallow(<Board winner={DRAW} />);
        expect(component).toMatchSnapshot();
    })

    it('renders correctly the overlay when noughts are winners', () => {
        const component = shallow(<Board winner={NOUGHT} />);
        expect(component).toMatchSnapshot();
    })

    it('renders correctly the overlay when crosses are winners', () => {
        const component = shallow(<Board winner={CROSS} />);
        expect(component).toMatchSnapshot();
    })
});