import {fetchAllPokemon} from '../util/api_util';
export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON"


export const requestAllPokemon = () => (dispatch) => {
  // debugger
   return fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
};

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
})
window.requestAllPokemon = requestAllPokemon //DEVELOPMENT TESTING PURPOSES ONLY!! REMOVE FOR PROD
window.receiveAllPokemon = receiveAllPokemon  //DEVELOPMENT TESTING PURPOSES ONLY!! REMOVE FOR PROD