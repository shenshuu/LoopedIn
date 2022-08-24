import * as ApiUtil from '../util/session_api_util';

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
});

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

const logoutUser = () => ({
    type: LOGOUT_USER,
});

const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors 
});

export const login = user => dispatch => (
    ApiUtil.login(user)
    .then( user => dispatch(receiveUser(user)))
);

export const logout = () => dispatch => (
    ApiUtil.logout()
    .then(() => dispatch(logoutUser()))
);

export const signup = user => dispatch => (
    ApiUtil.signup(user)
    .then(user => dispatch(receiveUser(user)))
);

export const fetchUsers = users => dispatch => (
    ApiUtil.fetchUsers(users)
    .then(users => dispatch(receiveUsers(users)))
);

export const updateUser = user => dispatch => (
    ApiUtil.updateUser(user)
    .then(user => dispatch(receiveUser(user)))
);