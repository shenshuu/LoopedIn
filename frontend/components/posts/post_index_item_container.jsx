import { connect } from 'react-redux';
import PostIndexItem from './post_index_item';
import {updatePost, deletePost} from '../../actions/post_actions';
import { fetchLikes } from '../../actions/like_actions'; 
import { fetchComments } from '../../actions/comment_actions';
import { createLike, deleteLike } from '../../actions/like_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.post.user_id],
        current_user: state.entities.users[state.session.id],
        comments: state.entities.comments,
        likes: state.entities.likes,
    }
}

const mapDispatchToProps = dispatch => ({
    updatePost: post => dispatch(updatePost(post)),
    deletePost: post => dispatch(deletePost(post)),
    createLike: like => dispatch(createLike(like)),
    deleteLike: like => dispatch(deleteLike(like)),
    fetchComments: () => dispatch(fetchComments()),
    fetchLikes: () => dispatch(fetchLikes()),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostIndexItem);