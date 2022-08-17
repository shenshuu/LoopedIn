import * as ApiUtil from '../util/post_api_util';

export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";

export const receivePost = post => ({
    type: RECEIVE_POST,
    post 
});

export const removePost = post => ({
    type: REMOVE_POST,
    post
});

export const createPost = post => dispatch => (
    ApiUtil.createPost(post)
    .then(post => dispatch(receivePost(post)))
);

export const deletePost = post => dispatch => (
    ApiUtil.deletePost(post)
    .then(post => dispatch(removePost(post)))
);

export const updatePost = post => dispatch => (
    ApiUtil.updatePost(post)
    .then(post => dispatch(receivePost(post)))
);