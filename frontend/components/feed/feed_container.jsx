import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Feed from './feed';

const mapStateToProps = state => ({
    user: state.entities.users[state.session.id],
});

const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);