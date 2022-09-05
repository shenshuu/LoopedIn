import React from 'react';

class NetworkInvitationItem extends React.Component {
    constructor(props) {
        super(props);
        this.renderInvitation = this.renderInvitation.bind(this);
    }

    renderInvitation() {
        return (
            <div className="network-invitation-container">
                <div className="network-invitation-item-left">
                    <div className="network-invitation-user-img">
                        {Object.keys(this.props.user.image).length < 5 ? <img src="" alt="default-image"/> 
                        : <img src={this.props.user.image} alt="user-image"/>}
                    </div>
                    <div className="network-invitation-user-info">
                        <p className="network-invitation-user-name">{`${this.props.user.first_name} ${this.props.user.last_name}`}</p>
                        <p className="network-invitation-user-headline">{this.props.user.headline}</p>
                        <p className="network-invitation-user-location">{`${this.props.user.location_city}, ${this.props.user.location_country}`}</p>
                    </div>
                </div>
                <div className="network-invitation-item-right">
                    <div className="network-invitation-ignore">Ignore</div>
                    <div className="network-invitation-accept">Accept</div>
                </div>
            </div>
        )
    }

    render() {
        return this.props.user && this.renderInvitation();
    }
}

export default NetworkInvitationItem;