import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {login, logout, signup} from './actions/session_actions';
import {createPost, updatePost, deletePost} from './actions/post_actions';

import Root from './components/root';

window.login = login;
window.logout = logout;
window.signup = signup;
window.createPost = createPost;
window.updatePost = updatePost;
window.deletePost = deletePost;

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