import React from 'react';

class UserIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="other-user-container">
                <div className="other-user-contents">
                    <div className="other-user-img">
                        <img src={this.props.user.image} alt="user-photo" />
                    </div>
                    <div className="other-user-info">
                        <div className="other-user-name-contents">
                            <p className="other-user-name">{`${this.props.user.first_name} ${this.props.user.last_name}`}</p>
                            <div className="other-user-pronouns-container">
                                <p className="other-user-pronouns">{`(${this.props.user.pronouns})`}</p>
                            </div>
                        </div>
                        <p className="other-user-headline">{this.props.user.headline}</p>
                        <button className="connect">Connect</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserIndexItem;