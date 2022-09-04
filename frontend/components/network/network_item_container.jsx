import { connect } from 'react-redux';
import NetworkItem from './network_item';

const mapStateToProps = state => ({
    users: state.entities.users,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(NetworkItem);