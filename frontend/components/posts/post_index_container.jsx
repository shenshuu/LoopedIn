import { updatePost, deletePost, fetchPosts } from '../../actions/post_actions';
import { fetchComments } from '../../actions/comment_actions';
import { fetchLikes } from '../../actions/like_actions';
import { connect } from 'react-redux';
import PostIndex from './post_index';

const mapStateToProps = (state) => ({
    posts: state.entities.posts,
});

const mapDispatchToProps = dispatch => ({
    updatePost: post => dispatch(updatePost(post)),
    deletePost: post => dispatch(deletePost(post)),
    fetchPosts: () => dispatch(fetchPosts()),
    fetchComments: () => dispatch(fetchComments()),
    fetchLikes: () => dispatch(fetchLikes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);