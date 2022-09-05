import PendingModalContainer from '../modals/pending_modal_container';
import React from 'react';

class NetworkItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {pending_modal_hidden: true};
        this.togglePendingModal = this.togglePendingModal.bind(this);
        this.handleUserShow = this.handleUserShow.bind(this);
        this.acceptConnect = this.acceptConnect.bind(this);
        this.deleteConnect = this.deleteConnect.bind(this);
        this.sendConnect = this.sendConnect.bind(this);
    }

    togglePendingModal() {
        this.setState({pending_modal_hidden: !this.state.pending_modal_hidden});
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
                        <div className="network-item-cover-photo"><img src="https://media-exp1.licdn.com/dms/image/C5616AQFm9VPk7Nd1cQ/profile-displaybackgroundimage-shrink_350_1400/0/1635706270087?e=1667433600&v=beta&t=-GG8YaHFDO0dW6kTxGKSS9yEXHnX56jGMCffQn1cslk" alt="cover-photo" /></div>
                        <div className="network-item-profile-photo">
                            {Object.keys(this.props.user.image).length < 5 ? <img src="https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png" alt="user-photo" /> 
                            : <img src={this.props.user.image} alt="user-photo" /> }
                        </div>
                    </div>
                    <div className="network-item-info">
                        <p className="network-item-name">{`${this.props.user.first_name} ${this.props.user.last_name}`}</p>
                        <p className="network-item-headline">{this.props.user.headline}</p>
                        <p className="network-item-location">{`${this.props.user.location_city}, ${this.props.user.location_country}`}</p>
                    </div>
                </div>
                <div className="connect-btn-container">
                    <p className="network-item-about">{this.props.user.about}</p>
                    <div id="network-connect-btn" onClick={e => e.stopPropagation()}>
                        {Object.values(this.props.connects).filter(connect => connect.sender_id === this.props.current_user.id && connect.receiver_id === this.props.user.id || connect.sender_id === this.props.user.id && connect.receiver_id === this.props.current_user.id).length === 0 ?
                        <button className="connect-btn" onClick={() => this.sendConnect()}>Connect</button>
                        : Object.values(this.props.connects).filter(connect => connect.pending && connect.sender_id === this.props.current_user.id && connect.receiver_id === this.props.user.id || connect.sender_id === this.props.user.id && connect.receiver_id === this.props.current_user.id).length > 0 && Object.values(this.props.connects).filter(connect => connect.pending && connect.sender_id === this.props.current_user.id && connect.receiver_id === this.props.user.id || connect.sender_id === this.props.user.id && connect.receiver_id === this.props.current_user.id)[0].sender_id === this.props.current_user.id ? 
                        <button className="connect-btn" id="pending-network" onClick={() => this.togglePendingModal()}>Pending</button> 
                        : Object.values(this.props.connects).filter(connect => connect.pending && (connect.sender_id === this.props.current_user.id && connect.receiver_id === this.props.user.id || connect.sender_id === this.props.user.id && connect.receiver_id === this.props.current_user.id)).length > 0 && Object.values(this.props.connects).filter(connect => connect.pending && (connect.sender_id === this.props.current_user.id && connect.receiver_id === this.props.user.id || connect.sender_id === this.props.user.id && connect.receiver_id === this.props.current_user.id))[0].receiver_id === this.props.current_user.id ?
                        <button className="connect-btn" onClick={() => this.acceptConnect()}>Accept</button>
                        : Object.values(this.props.connects).filter(connect => connect.accepted && connect.sender_id === this.props.current_user.id && connect.receiver_id === this.props.user.id || connect.sender_id === this.props.user.id && connect.receiver_id === this.props.current_user.id).length === 1 ? 
                        <button className="connect-btn" onClick={() => this.deleteConnect()}>Disconnect</button> : <button id="add-profile-section" onClick={() => this.deleteConnect()}>Disconnect</button>}
                    </div>
                </div>
                {this.state.pending_modal_hidden ? "" : <PendingModalContainer user={this.props.user} current_user={this.props.current_user} togglePendingModal={() => this.togglePendingModal()}/>}
            </div>
        )
    }
}

export default NetworkItem;