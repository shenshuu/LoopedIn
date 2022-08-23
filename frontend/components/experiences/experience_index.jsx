import ExperienceIndexItemContainer from './experience_index_item_container';
import CreateExperienceForm from './create_experience_form';
import CreateIcon from '@mui/icons-material/Create';
import AddIcon from '@mui/icons-material/Add';
import equal from 'fast-deep-equal';
import React from 'react';

class ExperienceIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            current_user: this.props.current_user,
            user: this.props.user,
            experiences: [],
            adding_experience: false,
            editing_experience: false,
        }
        this.toggleEditing = this.toggleEditing.bind(this);
        this.toggleAdding = this.toggleAdding.bind(this);
    }

    componentDidMount() {
        this.props.fetchExperiences();
    }

    componentDidUpdate(prevProps) {
        if (!equal(this.props.experiences, prevProps.experiences)) {
            this.setState({
                experiences: Object.values(this.props.experiences).filter(
                    experience => experience.user_id === this.props.user.id 
                )
            });
        }
    }

    toggleEditing() {
        this.setState({editing_experience: !this.state.editing_experience});
    }

    toggleAdding() {
        this.setState({adding_experience: !this.state.adding_experience});
    }

    render() {
        return (
            <div>
                <CreateExperienceForm createExperience={this.props.createExperience} adding={this.state.adding_experience} toggleAdding={() => this.toggleAdding()}/>
                <div id="experiences-container">
                    <div id="experiences-header">
                        <p className="experiences-title">Experience</p>
                        {this.props.user.id === this.props.current_user.id ? <div className="experience-actions">
                            <AddIcon className="experience-action" onClick={this.toggleAdding}/>
                            <CreateIcon className="experience-action" onClick={this.toggleEditing}/>
                        </div>: ""}
                    </div>
                    <ul>
                        {Object.values(this.props.experiences).map((exp, i) => {
                            if (this.props.user.id === exp.user_id)
                                return <ExperienceIndexItemContainer experience={exp} key={exp+i} editing={this.state.editing_experience}/>
                        })}
                    </ul>
                </div>
            </div>
        )
    }

}

export default ExperienceIndex;