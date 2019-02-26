import React from 'react';
import { shallow, render } from 'enzyme';
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

    it('renders an array of cells', () => {
        const component = render(<Board game={[-1, -1, -1, -1, -1, -1, -1, -1, -1]} />);
        expect(component.find('div.Cell').length).toEqual(9);
    })

    it('click on a board cell will call board click function', () => {
        const clickFn = jest.fn();
        const game = [EMPTY, EMPTY, EMPTY];
        const board = shallow(<Board game={game} onClick={clickFn} />)

        board.find('Cell').first().simulate('click');
        expect(clickFn).toHaveBeenCalled();
    })
});