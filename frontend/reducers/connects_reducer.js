import { RECEIVE_CONNECTS, RECEIVE_CONNECT, REMOVE_CONNECT, REMOVE_CONNECTS } from "../actions/connect_actions";

const connectsReducer = (state={}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CONNECTS:
            return action.connects;
        case RECEIVE_CONNECT:
            debugger;
            nextState[action.connect.id] = action.connect;
            return nextState;
        case REMOVE_CONNECT:
            delete nextState[action.connect.id];
            return nextState;
        case REMOVE_CONNECTS:
            return {};
        default: 
            return state;
    }
}

export default connectsReducer;