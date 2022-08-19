import { updatePost, deletePost, fetchPosts } from '../../actions/post_actions';
import { connect } from 'react-redux';
import PostIndex from './post_index';

const mapStateToProps = (state) => {
    window.s = state;
    return {
        posts: Object.values(state.entities.posts),
    }
};

const mapDispatchToProps = dispatch => ({
    updatePost: post => dispatch(updatePost(post)),
    deletePost: post => dispatch(deletePost(post)),
    fetchPosts: () => dispatch(fetchPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);