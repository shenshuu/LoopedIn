import React from 'react';

class UserIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.history.push(`/users/${this.props.user.id}`);
    }

    render() {
        return (
            <div className="other-user-container">
                <div className="other-user-contents">
                    <div className="other-user-img" onClick={this.handleClick}>
                        <img src={this.props.user.image} alt="user-photo" />
                    </div>
                    <div className="other-user-info">
                        <div className="other-user-name-contents">
                            <p className="other-user-name" onClick={this.handleClick}>
                                {`${this.props.user.first_name} ${this.props.user.last_name}`}
                            </p>
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