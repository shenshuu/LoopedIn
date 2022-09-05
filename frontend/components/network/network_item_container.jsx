import { connect } from 'react-redux';
import NetworkItem from './network_item';
import { createConnect, deleteConnect, updateConnect } from '../../actions/connect_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
    current_user: state.entities.users[state.session.id],
    users: state.entities.users,
    connects: state.entities.connects,
});

const mapDispatchToProps = dispatch => ({
    createConnect: connect => dispatch(createConnect(connect)),
    deleteConnect: connect => dispatch(deleteConnect(connect)),
    updateConnect: connect => dispatch(updateConnect(connect)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NetworkItem));