import { RECEIVE_POSTS, RECEIVE_POST, REMOVE_POST, REMOVE_POSTS } from "../actions/post_actions";

const postsReducer = (state={}, action) => {
    Object.freeze(state);

    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_POSTS:
            return {...state, ...action.posts}
        case RECEIVE_POST:
            nextState[action.post.id] = action.post;
            return nextState;
        case REMOVE_POSTS:
            return {};
        case REMOVE_POST:
            delete nextState[action.post.id];
            return nextState;
        default:
            return state;
    }
}

export default postsReducer;