import { createPost, fetchPosts } from "../../actions/post_actions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PostForm from './post_form';

const mapStateToProps = state => ({
    user: state.entities.users[state.session.id],
    post: {
        user_id: state.entities.users[state.session.id],
        body: ''
    },
});

const mapDispatchToProps = dispatch => ({
    createPost: post => dispatch(createPost(post)),
    fetchPosts: () => dispatch(fetchPosts()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostForm));