import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';
import {merge} from 'lodash';

export const pokemonReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type){
        case RECEIVE_ALL_POKEMON:
            newState = Object.assign({}, action.pokemon);
            return newState;
        case RECEIVE_POKEMON:
            newState = merge({}, state, action.pokemon);
            return newState;
        default: return state;
    }
            
};