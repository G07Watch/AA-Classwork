import React from 'react'
import ReactDOM from 'react-dom'
import { receiveAllPokemon } from './actions/pokemon_actions';
import { fetchAllPokemon } from './util/api_util';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {

  const store = configureStore();
    // debugger
    window.getState = store.getState; //DEVELOPMENT TESTING PURPOSES ONLY!! REMOVE FOR PROD
    window.dispatch = store.dispatch;  //DEVELOPMENT TESTING PURPOSES ONLY!! REMOVE FOR PROD

    const root = document.getElementById('root');
    ReactDOM.render(<h1>Pokedex</h1>, root);
});

