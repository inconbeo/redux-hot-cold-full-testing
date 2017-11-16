import React from 'react';
import {shallow, mount} from 'enzyme';

import {GuessForm} from './guess-form';
import {makeGuess} from '../actions';

describe('<GuessForm />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessForm />);
    });

    it('Should dispatch the makeGuess action when the form is submitted', () => {
        const spy = jest.fn();
        const wrapper = mount(<GuessForm dispatch={spy} />);
        const guess = 10;
        wrapper.find('input[type="text"]').instance().value = guess;
        wrapper.simulate('submit');
        expect(spy).toHaveBeenCalledWith(makeGuess(guess.toString()));
    });

    it('Should reset the input when the form is submitted', () => {
        const wrapper = mount(<GuessForm dispatch={()=>{}} />);
        const input = wrapper.find('input[type="text"]');
        input.instance().value = 10;
        wrapper.simulate('submit');
        expect(input.instance().value).toEqual('');
    });
});