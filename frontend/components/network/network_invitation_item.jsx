import React from 'react';

class NetworkInvitationItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {rerender: true};
        this.renderInvitation = this.renderInvitation.bind(this);
        this.handleUserShow = this.handleUserShow.bind(this);
        this.acceptConnect = this.acceptConnect.bind(this);
        this.deleteConnect = this.deleteConnect.bind(this);
    }

    handleUserShow(userId) {
        this.props.history.push(`/users/${userId}`);
    }

    acceptConnect() {
        const pendingConnects = Object.values(this.props.connects).filter(connect => connect.pending && connect.sender_id === this.props.current_user.id && connect.receiver_id === this.props.user.id || connect.sender_id === this.props.user.id && connect.receiver_id === this.props.current_user.id);
        if (pendingConnects.length > 0) {
            let updatedConnect = Object.assign({}, pendingConnects[0], {pending: false, accepted: true});
            this.props.updateConnect(updatedConnect);
        }
    }

    deleteConnect() {
        const filteredConnects = Object.values(this.props.connects).filter(connect => connect.accepted && connect.sender_id === this.props.current_user.id && connect.receiver_id === this.props.user.id || connect.sender_id === this.props.user.id && connect.receiver_id === this.props.current_user.id);
        if (filteredConnects.length > 0) {
            this.props.deleteConnect(filteredConnects[0])
        }
    }

    renderInvitation() {
        return (
            <div>
                <div className="network-invitation-container">
                    <div className="network-invitation-item-left">
                        <div className="network-invitation-user-img" onClick={() => this.handleUserShow(this.props.user.id)}>
                            {Object.keys(this.props.user.image).length < 5 ? <img src="https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png" alt="default-image"/> 
                            : <img src={this.props.user.image} alt="user-image"/>}
                        </div>
                        <div className="network-invitation-user-info">
                            <p className="network-invitation-user-name" onClick={() => this.handleUserShow(this.props.user.id)}>{`${this.props.user.first_name} ${this.props.user.last_name}`}</p>
                            <p className="network-invitation-user-headline">{this.props.user.headline}</p>
                            <p className="network-invitation-user-location">{`${this.props.user.location_city}, ${this.props.user.location_country}`}</p>
                        </div>
                    </div>
                    <div className="network-invitation-item-right">
                        <div className="network-invitation-ignore" onClick={() => this.deleteConnect()}>Ignore</div>
                        <div className="network-invitation-accept" onClick={() => this.acceptConnect()}>Accept</div>
                    </div>
                </div>
                <div className="network-invitation-footer-divider"></div>
            </div>
        )
    }

    render() {
        return this.props.user && this.renderInvitation();
    }
}

export default NetworkInvitationItem;