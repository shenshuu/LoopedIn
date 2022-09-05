import React from 'react';

class NetworkItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleUserShow = this.handleUserShow.bind(this);
        this.acceptConnect = this.acceptConnect.bind(this);
        this.deleteConnect = this.deleteConnect.bind(this);
        this.sendConnect = this.sendConnect.bind(this);
    }

    sendConnect() {
        this.props.createConnect({
            sender_id: this.props.current_user.id,
            receiver_id: this.props.user.id,
            pending: true,
            accepted: false,
        });
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

    handleUserShow(userId) {
        console.log('inside handleUserShow');
        this.props.history.push(`/users/${userId}`);
    }

    render() {
        return (
            <div className="network-item-container" onClick={() => this.handleUserShow(this.props.user.id)}>
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
                    {Object.values(this.props.connects).filter(connect => connect.sender_id === this.props.current_user.id && connect.receiver_id === this.props.user.id || connect.sender_id === this.props.user.id && connect.receiver_id === this.props.current_user.id).length === 0 ?
                    <button className="connect-btn" onClick={() => this.sendConnect()}>Connect</button>
                    : Object.values(this.props.connects).filter(connect => connect.pending && connect.sender_id === this.props.current_user.id && connect.receiver_id === this.props.user.id || connect.sender_id === this.props.user.id && connect.receiver_id === this.props.current_user.id).length > 0 && Object.values(this.props.connects).filter(connect => connect.pending && connect.sender_id === this.props.current_user.id && connect.receiver_id === this.props.user.id || connect.sender_id === this.props.user.id && connect.receiver_id === this.props.current_user.id)[0].sender_id === this.props.current_user.id ? 
                    <button className="connect-btn" onClick={() => this.acceptConnect()}>Pending</button> 
                    : Object.values(this.props.connects).filter(connect => connect.pending && (connect.sender_id === this.props.current_user.id && connect.receiver_id === this.props.user.id || connect.sender_id === this.props.user.id && connect.receiver_id === this.props.current_user.id)).length > 0 && Object.values(this.props.connects).filter(connect => connect.pending && (connect.sender_id === this.props.current_user.id && connect.receiver_id === this.props.user.id || connect.sender_id === this.props.user.id && connect.receiver_id === this.props.current_user.id))[0].receiver_id === this.props.current_user.id ?
                    <button className="connect-btn" onClick={() => this.acceptConnect()}>Accept</button>
                    : Object.values(this.props.connects).filter(connect => connect.accepted && connect.sender_id === this.props.current_user.id && connect.receiver_id === this.props.user.id || connect.sender_id === this.props.user.id && connect.receiver_id === this.props.current_user.id).length === 1 ? 
                    <button className="connect-btn" onClick={() => this.deleteConnect()}>Disconnect</button> : <button id="add-profile-section" onClick={() => this.deleteConnect()}>Disconnect</button>}
                </div>
            </div>
        )
    }
}

export default NetworkItem;