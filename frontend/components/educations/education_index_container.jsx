import { connect } from 'react-redux';
import EducationIndex from './education_index';
import { fetchEducations, createEducation } from '../../actions/education_actions';

const mapStateToProps = state => ({
    educations: state.entities.educations,
});

const mapDispatchToProps = dispatch => ({
    fetchEducations: () => dispatch(fetchEducations()),
    createEducation: education => dispatch(createEducation(education)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EducationIndex);