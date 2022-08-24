import * as ApiUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENTS = "REMOVE_COMMENTS";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments 
});

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment 
});

const removeComments = () => ({
    type: REMOVE_COMMENTS,
})

const removeComment = comment => ({
    type: REMOVE_COMMENT,
    comment
});

export const fetchComments = comments => dispatch => (
    ApiUtil.fetchComments(comments)
    .then(comments => dispatch(receiveComments(comments)))
);

export const createComment = comment => dispatch => (
    ApiUtil.createComment(comment)
    .then(comment => dispatch(receiveComment(comment)))
);

export const updateComment = comment => dispatch => (
    ApiUtil.updateComment(comment)
    .then(comment => dispatch(receiveComment(comment)))
);

export const deleteComment = comment => dispatch => (
    ApiUtil.deleteComment(comment)
    .then(() => dispatch(removeComment(comment)))
);

export const deleteComments = () => dispatch => (
    dispatch(removeComments())
);