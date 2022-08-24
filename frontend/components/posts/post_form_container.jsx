import { connect } from "react-redux";
import PostForm from './post_form';
import { createPost, fetchPosts } from "../../actions/post_actions";

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

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);