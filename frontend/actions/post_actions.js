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

export const removePost = postId => ({
    type: REMOVE_POST,
    postId
});

export const fetchPosts = () => dispatch => (
    ApiUtil.fetchPosts()
    .then(posts => dispatch(receivePosts(posts)))
);

export const createPost = post => dispatch => (
    ApiUtil.createPost(post)
    .then(post => dispatch(receivePost(post)))
);

export const deletePost = postId => dispatch => (
    ApiUtil.deletePost(postId)
    .then(() => dispatch(removePost(postId)))
);

export const updatePost = post => dispatch => {
    console.log(post);
    return ApiUtil.updatePost(post)
    .then(post => dispatch(receivePost(post)))
};