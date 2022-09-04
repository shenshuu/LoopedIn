import React from 'react';

class NetworkItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleConnect = this.handleConnect.bind(this);
    }

    handleConnect() {
        const filteredConnects = Object.values(this.props.connects).filter(connect => connect.user1_id === this.props.current_user.id && connect.user2_id === this.props.user.id)
        if (filteredConnects.length > 0) {
            this.props.deleteConnect(filteredConnects[0]);
        } else {
            this.props.createConnect({
                user1_id: this.props.current_user.id,
                user2_id: this.props.user.id,
            });
        }
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
                    <p className="network-item-about">{this.props.user.about}</p>
                    {Object.values(this.props.connects).filter(connect => connect.user1_id === this.props.current_user.id && connect.user2_id === this.props.user.id).length === 0 ? 
                    <button className="connect-btn" onClick={() => this.handleConnect()}>Connect</button>
                    :
                    <button className="connect-btn" onClick={() => this.handleConnect()}>Disconnect</button>
                    }
                    
                </div>
            </div>
        )
    }
}

export default NetworkItem;