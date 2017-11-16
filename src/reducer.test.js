import reducer from './reducer';
import {newGame, makeGuess, toggleInfoModal} from './actions';
import 'raf/polyfill';

describe('reducer', () => {
    it('Should set the initial state when nothing is passed in', () => {
        const state = reducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual({
            guesses: [],
            feedback: 'Make your guess!',
            correctAnswer: state.correctAnswer,
            showInfoModal: false
        })
        expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
        expect(state.correctAnswer).toBeLessThanOrEqual(100);

    })

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = reducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });
   
})

describe('newGame', () => {
    it('should start a new game', () => {
        let state = {guesses: [1,2,3,4,5], feedback: "Hello"};
        state = reducer(state, newGame());
        expect(state.guesses).toEqual([]);
        expect(state.feedback).toEqual('Make your guess!');
        expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
        expect(state.correctAnswer).toBeLessThanOrEqual(100);
    })
})

describe('makeGuess', () => {
    it('Should make guess and add guess to the list', () => {
        let state ={
            guesses:[],
            feedback: "hahaha",
            correctAnswer: 100
        }
        
        state = reducer(state, makeGuess(25));
        expect(state.guesses).toEqual([25]);
        expect(state.feedback).toEqual('You\'re Ice Cold...');

        state = reducer(state, makeGuess(60));
        expect(state.guesses).toEqual([25, 60]);
        expect(state.feedback).toEqual('You\'re Cold...');

        state = reducer(state, makeGuess(80));
        expect(state.guesses).toEqual([25, 60, 80]);
        expect(state.feedback).toEqual('You\'re Warm');

        state = reducer(state, makeGuess(95));
        expect(state.guesses).toEqual([25, 60, 80, 95]);
        expect(state.feedback).toEqual('You\'re Hot!');

        state = reducer(state, makeGuess(100));
        expect(state.guesses).toEqual([25, 60, 80, 95, 100]);
        expect(state.feedback).toEqual('You got it!');
    })
})

describe('toggleInfoModal', () => {
   it('Should toggle infomodal', () => {
        let state = {showInfoModal: false}
        state = reducer(state, toggleInfoModal());
        expect(state.showInfoModal).toEqual(true)
    })
})