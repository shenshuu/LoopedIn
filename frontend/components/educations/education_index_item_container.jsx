import { connect } from 'react-redux';
import EducationIndexItem from './education_index_item';
import { updateEducation, deleteEducation } from '../../actions/education_actions';

const mapStateToProps = state => ({
    
});

const mapDispatchToProps = dispatch => ({
    updateEducation: education => dispatch(updateEducation(education)),
    deleteEducation: education => dispatch(deleteEducation(education)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EducationIndexItem);