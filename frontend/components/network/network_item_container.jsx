import { connect } from 'react-redux';
import NetworkItem from './network_item';
import { createConnect, deleteConnect } from '../../actions/connect_actions';

const mapStateToProps = state => ({
    current_user: state.entities.users[state.session.id],
    users: state.entities.users,
    connects: state.entities.connects,
});

const mapDispatchToProps = dispatch => ({
    createConnect: connect => dispatch(createConnect(connect)),
    deleteConnect: connect => dispatch(deleteConnect(connect)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NetworkItem);