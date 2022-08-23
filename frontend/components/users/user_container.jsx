import { createExperience } from '../../actions/experience_actions';
import { connect } from 'react-redux';
import User from './user';

const mapStateToProps = (state, ownProps) => ({
    current_user: state.entities.users[state.session.id],
    user: state.entities.users[ownProps.match.params.userId],
});

const mapDispatchToProps = dispatch => ({
    createExperience: experience => dispatch(createExperience(experience)),
});

export default connect(mapStateToProps, mapDispatchToProps)(User);