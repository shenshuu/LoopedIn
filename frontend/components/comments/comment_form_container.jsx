import { createComment } from '../../actions/comment_actions';
import { connect } from 'react-redux';
import CommentForm from './comment_form';

const mapStateToProps = state => ({
    user: state.entities.users[state.session.id],
});

const mapDispatchToProps = dispatch => ({
    createComment: comment => dispatch(createComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);