import {fetchAllPokemon, fetchPokemon} from '../util/api_util';
export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON"
export const RECEIVE_POKEMON = 'RECEIVE_POKEMON';


export const requestSinglePokemon = (id) => (dispatch) => {
  debugger;
  return fetchPokemon(id)
    .then(pokemon => dispatch(receivePokemon(pokemon)))
};

export const requestAllPokemon = () => (dispatch) => {
  // debugger
   return fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
};

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
})

export const receivePokemon = pokemon => ({
  type: RECEIVE_POKEMON,
  pokemon
})

window.requestSinglePokemon = requestSinglePokemon
window.requestAllPokemon = requestAllPokemon //DEVELOPMENT TESTING PURPOSES ONLY!! REMOVE FOR PROD
window.receiveAllPokemon = receiveAllPokemon  //DEVELOPMENT TESTING PURPOSES ONLY!! REMOVE FOR PROD