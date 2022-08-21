import { connect } from 'react-redux';
import { login, fetchUsers } from '../../actions/session_actions';
import { fetchPosts } from '../../actions/post_actions';
import { fetchComments } from '../../actions/comment_actions';
import { fetchLikes } from '../../actions/like_actions';
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
    fetchComments: () => dispatch(fetchComments()),
    fetchLikes: () => dispatch(fetchLikes()),
    fetchUsers: () => dispatch(fetchUsers()),
    login: user => dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);