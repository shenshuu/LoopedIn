import EducationIndexItemContainer from './education_index_item_container';
import CreateEducationForm from './create_education_form';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
// import CreateIcon from '@mui/icons-material/Create';
// import AddIcon from '@mui/icons-material/Add';
import equal from 'fast-deep-equal';
import React from 'react';

class EducationIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            current_user: this.props.current_user,
            user: this.props.user,
            educations: [],
            adding_education: false,
            editing_education: false,
        }
        this.toggleEditing = this.toggleEditing.bind(this);
        this.toggleAdding = this.toggleAdding.bind(this);
    }

    componentDidMount() {
        this.props.fetchEducations();
    }

    componentDidUpdate(prevProps) {
        if (!equal(this.props.educations, prevProps.educations)) {
            this.setState({
                educations: Object.values(this.props.educations).filter(
                    education => education.user_id === this.props.user.id 
                )
            });
        }
    }

    toggleEditing() {
        this.setState({editing_education: !this.state.editing_education});
    }

    toggleAdding() {
        this.setState({adding_education: !this.state.adding_education});
    }

    render() {
        return (
            <div>
                <CreateEducationForm createEducation={this.props.createEducation} adding={this.state.adding_education} toggleAdding={() => this.toggleAdding()}/>
                <div id="experiences-container">
                    <div id="experiences-header">
                        <p className="experiences-title">Education</p>
                        {this.props.user.id === this.props.current_user.id ? <div className="experience-actions">
                            {/* <AddIcon className="experience-action" onClick={this.toggleAdding}/>
                            <CreateIcon className="experience-action" onClick={this.toggleEditing}/> */}
                            <div className="experience-action" onClick={this.toggleAdding}>
                                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                            </div>
                            <div className="experience-action" onClick={this.toggleEditing}>
                                <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                            </div>
                        </div>: ""}
                    </div>
                    <ul>
                        {Object.values(this.props.educations).map((edu, i) => {
                            if (this.props.user.id === edu.user_id)
                                return <EducationIndexItemContainer education={edu} key={edu+i} editing={this.state.editing_education}/>
                        })}
                    </ul>
                </div>
            </div>
        )
    }

}

export default EducationIndex;