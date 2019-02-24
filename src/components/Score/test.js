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

    it('render corectly for active player', () => {
        const activeScore = shallow(<Score active = {true} />);
        expect(activeScore).toMatchSnapshot();       
    });

    it('render corectly for passive player', () => {        
        const passiveScore = shallow(<Score active = {false} />);
        expect(passiveScore).toMatchSnapshot();       
    });
});