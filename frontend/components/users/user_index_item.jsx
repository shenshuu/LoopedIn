import React from 'react';

class UserIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <div id="other-user-img">
                        <img src={this.props.user.image} alt="user-photo" />
                    </div>
                    <div id="other-user-info">
                        <p id="other-user-name">{`${this.props.user.first_name} ${this.props.user.last_name}`}</p>
                        <p id="other-user-headline">{this.props.user.headline}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserIndexItem;