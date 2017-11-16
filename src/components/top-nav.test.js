import React from 'react';
import {shallow} from 'enzyme';

import {TopNav} from './top-nav';
import {newGame, NEW_GAME, toggleInfoModal, TOGGLE_INFO_MODAL} from '../actions';

describe('<TopNav />', () => {
    it('Renders without crashing', () => {
        shallow(<TopNav />);
    });

    it('Should dispatch newGame when new game is clicked', () => {
        const spy = jest.fn();
        const wrapper = shallow(<TopNav dispatch={spy} />);
        const link = wrapper.find('.new');
        link.simulate('click', {
            preventDefault() {}
        });
        expect(spy).toHaveBeenCalled();;
        expect(spy.mock.calls[0][0].type).toEqual(NEW_GAME);
        console.log(spy.mock.calls);
    });

    it('Should dispatch toggleInfoModal when info is clicked', () => {
        const spy = jest.fn();
        const wrapper = shallow(<TopNav dispatch={spy} />);
        const link = wrapper.find('.what');
        link.simulate('click', {
            preventDefault() {}
        });
        expect(spy).toHaveBeenCalled();
        expect(spy.mock.calls[0][0].type).toEqual(TOGGLE_INFO_MODAL);
        console.log(spy.mock.calls);
        
    });
});