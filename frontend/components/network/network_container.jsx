import { fetchUsers } from '../../actions/session_actions';
import { connect } from "react-redux";
import Network from './network';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Network);