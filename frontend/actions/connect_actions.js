import { Api } from '@mui/icons-material';
import * as ApiUtil from '../util/connect_api_util';

export const RECEIVE_CONNECTS = "RECEIVE_CONNECTS";
export const RECEIVE_CONNECT = "RECEIVE_CONNECT";
export const REMOVE_CONNECT = "REMOVE_CONNECT";

const receiveConnects = connects => ({
    type: RECEIVE_CONNECTS,
    connects
});

const receiveConnect = connect => ({
    type: RECEIVE_CONNECT,
    connect
});

const removeConnect = connect => ({
    type: REMOVE_CONNECT,
    connect
});

export const fetchConnects = connects => dispatch => (
    ApiUtil.fetchConnects(connects)
    .then(connects => dispatch(receiveConnects(connects)))
);

export const createConnect = connect => dispatch => (
    ApiUtil.createConnect(connect)
    .then(connect => dispatch(receiveConnect(connect)))
);

export const deleteConnect = connect => dispatch => (
    ApiUtil.deleteConnect(connect)
    .then(() => dispatch(removeConnect(connect)))
);