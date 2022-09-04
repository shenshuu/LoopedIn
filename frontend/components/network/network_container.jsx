import { fetchUsers } from '../../actions/session_actions';
import { connect } from "react-redux";
import Network from './network';

import { fetchConnects } from '../../actions/connect_actions';

const mapStateToProps = state => ({
    current_user: state.entities.users[state.session.id],
    users: state.entities.users,
});

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchConnects: () => dispatch(fetchConnects()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Network);