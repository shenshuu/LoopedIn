import { RECEIVE_POST, REMOVE_POST } from "../actions/post_actions";

const postsReducer = (state={}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_POST:
            return {[action.post.id]: action.post}
        case REMOVE_POST:
            delete nextState[action.post.id];
            return nextState;
        default:
            return state;
    }
}

export default postsReducer;