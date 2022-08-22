import { connect } from 'react-redux';
import { fetchExperiences } from '../../actions/experience_actions';
import ExperienceIndex from './experience_index';

const mapStateToProps = (state, ownProps) => ({
    current_user: state.entities.users[state.session.id],
    // user: state.entities.users[ownProps.match.params.userId],
    experiences: state.entities.experiences,
});

const mapDispatchToProps = dispatch => ({
    fetchExperiences: () => dispatch(fetchExperiences()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExperienceIndex);