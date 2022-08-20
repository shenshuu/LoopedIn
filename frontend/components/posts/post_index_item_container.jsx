import { connect } from 'react-redux';
import PostIndexItem from './post_index_item';
import {updatePost, deletePost} from '../../actions/post_actions';

const mapStateToProps = state => ({
    user: state.entities.users[state.session.id],
    comments: state.entities.comments,
    likes: state.entities.likes,
})

const mapDispatchToProps = dispatch => ({
    updatePost: post => dispatch(updatePost(post)),
    deletePost: post => dispatch(deletePost(post)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostIndexItem);