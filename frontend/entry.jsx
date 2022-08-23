import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {updateEducation, createEducation, fetchEducations, deleteEducation} from './actions/education_actions';

window.updateEducation = updateEducation;
window.createEducation = createEducation;
window.fetchEducations = fetchEducations;
window.deleteEducation = deleteEducation;

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