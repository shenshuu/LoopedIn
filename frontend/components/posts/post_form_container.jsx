import { connect } from "react-redux";
import PostForm from './post_form';
import { createPost } from "../../actions/post_actions";

const mapStateToProps = state => ({
    post: {
        user_id: 1, // set this equal to current user id
        body: ''
    },
});

const mapDispatchToProps = dispatch => ({
    createPost: post => dispatch(createPost(post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);