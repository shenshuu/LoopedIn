import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchConnects, createConnect, deleteConnect, deleteConnects } from './actions/connect_actions';

window.fetchConnects = fetchConnects;
window.createConnect = createConnect;
window.deleteConnect = deleteConnect;
window.deleteConnects = deleteConnects;

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: {
                    [window.currentUser.id]: window.currentUser,
                },
            },
            session: {
                id: window.currentUser.id,
            }
        }
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    window.store = store;
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});