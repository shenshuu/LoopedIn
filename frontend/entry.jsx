import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {login, logout, signup} from './actions/session_actions';
import {createPost, updatePost, deletePost, fetchPosts} from './actions/post_actions';
import {createComment, updateComment, deleteComment, fetchComments} from './actions/comment_actions';
import {createLike, deleteLike, fetchLikes} from './actions/like_actions';
import { createExperience, deleteExperience, updateExperience, fetchExperiences } from './actions/experience_actions';
import Root from './components/root';

window.login = login;
window.logout = logout;
window.signup = signup;
window.createPost = createPost;
window.updatePost = updatePost;
window.deletePost = deletePost;
window.fetchPosts = fetchPosts;
window.createComment = createComment;
window.updateComment = updateComment;
window.deleteComment = deleteComment;
window.fetchComments = fetchComments;
window.createLike = createLike;
window.deleteLike = deleteLike;
window.fetchLikes = fetchLikes;
window.createExperience = createExperience;
window.updateExperience = updateExperience;
window.deleteExperience = deleteExperience;
window.fetchExperiences = fetchExperiences;

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