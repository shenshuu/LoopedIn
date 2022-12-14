import { RECEIVE_LIKES, RECEIVE_LIKE, REMOVE_LIKE, REMOVE_LIKES } from "../actions/like_actions";
import { LOGOUT_USER } from "../actions/session_actions";

const likesReducer = (state={}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case LOGOUT_USER:
            return {}
        case RECEIVE_LIKES:
            return action.likes;
        case RECEIVE_LIKE:
            nextState[action.like.id] = action.like;
            return nextState;
        case REMOVE_LIKES:
            // debugger;
            let postLikes = {};
            let likes = Object.values(state);
            for (let i = 0; i < likes.length; i++) {
                if (likes[i].likeable_type === 'Post') {
                    postLikes[likes[i].id] = likes[i];
                }
            }
            return postLikes;
        case REMOVE_LIKE:
            delete nextState[action.like.id];
            return nextState;
        default: 
            return state;
    }
};

export default likesReducer;