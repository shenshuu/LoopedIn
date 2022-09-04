import { createExperience } from '../../actions/experience_actions';
import { createEducation } from '../../actions/education_actions';
import { deletePosts } from '../../actions/post_actions';
import { deleteLikes } from '../../actions/like_actions';
import { deleteComments } from '../../actions/comment_actions';
import { fetchUsers, updateUser } from '../../actions/session_actions';
import { connect } from 'react-redux';
import User from './user';

const mapStateToProps = (state, ownProps) => {
    return {
        current_user: state.entities.users[state.session.id],
        user: state.entities.users[ownProps.match.params.userId],
        users: state.entities.users,
    }
};

const mapDispatchToProps = dispatch => ({
    createExperience: experience => dispatch(createExperience(experience)),
    createEducation: education => dispatch(createEducation(education)),
    deletePosts: () => dispatch(deletePosts()),
    deleteLikes: () => dispatch(deleteLikes()),
    deleteComments: () => dispatch(deleteComments()),
    fetchUsers: () => dispatch(fetchUsers()),
    updateUser: user => dispatch(updateUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(User);