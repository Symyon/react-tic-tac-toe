import React from 'react';
import { shallow } from 'enzyme';
import Cell from './';

import { NOUGHT, CROSS, EMPTY } from '../../constants';

describe('Cell', () => {
    it('render correctly without props', () => {
        const component = shallow(<Cell />);
        expect(component).toMatchSnapshot();
    })

    it('render correctly empty', () => {
        const component = shallow(<Cell mark={EMPTY} />);
        expect(component).toMatchSnapshot();
    })

    it('render correctly with cross', () => {
        const component = shallow(<Cell mark={CROSS} />);
        expect(component).toMatchSnapshot();
    })

    it('render correctly with nought', () => {
        const component = shallow(<Cell mark={NOUGHT} />);
        expect(component).toMatchSnapshot();
    })

    it('render correctly when marked as winning', () => {
        const component = shallow(<Cell markIt={true} />);
        expect(component).toMatchSnapshot();
    })

    it('render correctly when marked as not winning', () => {
        const component = shallow(<Cell markIt={false} />);
        expect(component).toMatchSnapshot();
    })
});