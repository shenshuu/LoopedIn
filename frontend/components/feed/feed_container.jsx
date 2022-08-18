import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { fetchPosts } from '../../actions/post_actions';
import Feed from './feed';

const mapStateToProps = state => ({
    user: state.entities.users[state.session.id],
});

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts()),
    login: user => dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);