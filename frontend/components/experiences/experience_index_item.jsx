import React from 'react';

class ExperienceIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.calculateDate = this.calculateDate.bind(this);
    }

    calculateDate(date) {
        let newDate = date.split("-");
        let months = [
            null, 'January','February','March','April','May','June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        return (
            <div id="employment-date">{`${months[parseInt(newDate[1])]} ${parseInt(newDate[0])}`}</div>
        )
    }

    calculateDuration(startDate, endDate) {
        startDate = startDate.split("-").map(num => parseInt(num));
        endDate = endDate.split("-").map(num => parseInt(num));
        
    }

    render() {
        return (
            <div className="experience-item-container">
                <div className="experience-item">
                    <div className="company-photo">
                        <img src="https://i.postimg.cc/yNSmf9GF/image.png" alt="company-photo" />
                    </div>
                    <div className="experience-item-contents">
                        <p id="company-title">{`${this.props.experience.company}`}</p>
                        <div id="job">
                            <p id="job-title">{`${this.props.experience.title}`}</p>
                            {/* <p id="job-separator">.</p> */}
                            <p id="employment-type">{`${this.props.experience.employment_type}`}</p>
                        </div>
                        <div id="employment-duration">
                            {this.calculateDate(this.props.experience.start_date)}
                            <div id="employment-duration-separator"> - </div>
                            {Boolean(this.props.experience.end_date) ? this.calculateDate(this.props.experience.end_date) : "Present"}
                        </div>
                        <div id="employment-location">
                            {`${this.props.experience.location}`}
                        </div>
                    </div>
                </div>
                <div id="experiences-separator"></div>
            </div>
        )
    }
}

export default ExperienceIndexItem;