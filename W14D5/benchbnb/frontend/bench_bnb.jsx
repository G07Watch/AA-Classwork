import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { login } from './actions/session_actions';
import { fetchBenches, createBench } from '../frontend/util/bench_api_util';

document.addEventListener("DOMContentLoaded", () => {

  fetchBenches;
  createBench;

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //TESTING START
  window.dispatch = store.dispatch;
  window.getState = store.dispatch;
  // window.fetchBenches = fetchBenches;
  //TESTING END 

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});


window.login = login;
