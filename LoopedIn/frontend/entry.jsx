import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {login, logout, signup} from './actions/session_actions';
import Root from './components/root';

window.login = login;
window.logout = logout;
window.signup = signup;

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    window.store = store;
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});