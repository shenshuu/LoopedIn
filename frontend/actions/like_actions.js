import * as ApiUtil from '../util/like_api_util';
export const RECEIVE_LIKES = "RECEIVE_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKES = "REMOVE_LIKES";
export const REMOVE_LIKE = "REMOVE_LIKE";

const receiveLikes = likes => ({
    type: RECEIVE_LIKES,
    likes 
});

const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like
});

const removeLike = like => ({
    type: REMOVE_LIKE,
    like 
});

export const removeLikes = () => ({
    type: REMOVE_LIKES,
})

export const deleteLikes = () => dispatch => (
    dispatch(removeLikes())
);

export const createLike = like => dispatch => (
    ApiUtil.createLike(like)
    .then(like => dispatch(receiveLike(like)))
);

export const fetchLikes = likes => dispatch => (
    ApiUtil.fetchLikes(likes)
    .then(likes => dispatch(receiveLikes(likes)))
);

export const deleteLike = like => dispatch => (
    ApiUtil.deleteLike(like)
    .then(() => dispatch(removeLike(like)))
);