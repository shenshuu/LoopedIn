import ExperienceIndexItem from './experience_index_item_container';
import equal from 'fast-deep-equal';
import React from 'react';

class ExperienceIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            current_user: this.props.current_user,
            user: this.props.user,
            experiences: [],
        }
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

    render() {
        return (
            <div id="experiences-container">
                <p className="experiences-title">Experience</p>
                <ul>
                    {Object.values(this.props.experiences).map((exp, i) => {
                        return <ExperienceIndexItem experience={exp} key={exp+i} />
                    })}
                </ul>
                <div>Why</div>
                <div>Why</div>
                <div>Why</div>
                <div>Why</div>
                <div>Why</div>
                <div>Why</div>
                <div>Why</div>
                <div>Why</div>
                <div>Why</div>
                <div>Why</div>
                <div>Why</div>
                <div>Why</div>
                <div>Why</div>
                <div>Why</div>
                <div>Why</div>
            </div>
        )
    }

}

export default ExperienceIndex;