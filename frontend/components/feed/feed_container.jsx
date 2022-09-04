import { connect } from 'react-redux';
import { login, fetchUsers } from '../../actions/session_actions';
import { fetchPosts } from '../../actions/post_actions';
import { fetchConnects } from '../../actions/connect_actions';
import Feed from './feed';

const mapStateToProps = state => {
    return {
        user: state.entities.users[state.session.id],
        users: state.entities.users,
        posts: state.entities.posts,
        comments: state.entities.comments,
        likes: state.entities.likes,
    }
};

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts()),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchConnects: () => dispatch(fetchConnects()),
    login: user => dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);