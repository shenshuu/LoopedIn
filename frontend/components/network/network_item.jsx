import React from 'react';

class NetworkItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="network-item-container">
                <div className="network-item-body">
                    <div className="network-item-images">
                        <div className="network-item-cover-photo"><img src="" alt="cover-photo" /></div>
                        <div className="network-item-profile-photo"><img src={this.props.user.image} alt="profile-photo" /></div>
                    </div>
                    <div className="network-item-info">
                        <p className="network-item-name">{`${this.props.user.first_name} ${this.props.user.last_name}`}</p>
                        <p className="network-item-headline">{this.props.user.headline}</p>
                        <p className="network-item-location">{`${this.props.user.location_city}, ${this.props.user.location_country}`}</p>
                    </div>
                </div>
                <div className="connect-btn-container">
                    <button className="connect-btn">Connect</button>
                </div>
            </div>
        )
    }
}

export default NetworkItem;