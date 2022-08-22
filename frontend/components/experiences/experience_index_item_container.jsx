import { connect } from 'react-redux';
import ExperienceIndexItem from './experience_index_item';
import { updateExperience, deleteExperience } from '../../actions/experience_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    updateExperience: experience => dispatch(updateExperience(experience)),
    deleteExperience: experience => dispatch(deleteExperience(experience)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExperienceIndexItem);