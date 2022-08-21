import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from "../actions/comment_actions";
import { LOGOUT_USER } from "../actions/session_actions";

const commentsReducer = (state={}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_COMMENTS:
            return action.comments;
        case RECEIVE_COMMENT:
            nextState[action.comment.id] = action.comment;
            return nextState;
        case LOGOUT_USER: 
            return {}
        case REMOVE_COMMENT:
            delete nextState[action.comment.id];
            return nextState;
        default: 
            return state;
    }
}

export default commentsReducer;