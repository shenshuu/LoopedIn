import * as ApiUtil from '../util/post_api_util';

export const RECEIVE_POSTS = "RECEIVE_POSTS"; 
export const RECEIVE_POST = "RECEIVE_POST"; 
export const REMOVE_POST = "REMOVE_POST"; 

export const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts 
});

export const receivePost = post => {
    return {
        type: RECEIVE_POST,
        post 
    }
};

export const removePost = post => ({
    type: REMOVE_POST,
    post
});

export const fetchPosts = posts => dispatch => (
    ApiUtil.fetchPosts(posts)
    .then(posts => dispatch(receivePosts(posts)))
);

export const createPost = post => dispatch => (
    ApiUtil.createPost(post)
    .then(post => dispatch(receivePost(post)))
);

export const deletePost = post => dispatch => {
    return ApiUtil.deletePost(post)
    .then(() => dispatch(removePost(post)))
};

export const updatePost = post => dispatch => {
    return ApiUtil.updatePost(post)
    .then(post => dispatch(receivePost(post)))
};