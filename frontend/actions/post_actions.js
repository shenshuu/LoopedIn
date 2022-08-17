import * as ApiUtil from '../util/post_api_util';

export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";

export const receivePost = post => ({
    type: RECEIVE_POST,
    post 
});

export const removePost = postId => ({
    type: REMOVE_POST,
    postId
});

export const createPost = post => dispatch => (
    ApiUtil.createPost(post)
    .then(post => dispatch(receivePost(post)))
);

export const deletePost = postId => dispatch => (
    ApiUtil.deletePost(postId)
    .then(postId => dispatch(removePost(postId)))
);

export const updatePost = (post, postId) => dispatch => (
    ApiUtil.updatePost(post, postId)
    .then(payload => dispatch(receivePost(payload.post)))
);