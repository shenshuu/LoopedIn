import React from 'react';

class UserIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.acceptConnect = this.acceptConnect.bind(this);
        this.deleteConnect = this.deleteConnect.bind(this);
        this.sendConnect = this.sendConnect.bind(this);
        this.handleClick = this.handleClick.bind(this);
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

    handleClick() {
        this.props.history.push(`/users/${this.props.user.id}`);
    }

    render() {
        return (
            <div className="other-user-container">
                <div className="other-user-contents">
                    <div className="other-user-img" onClick={this.handleClick}>
                        {Object.keys(this.props.user.image).length < 5 ? <img src="https://i.postimg.cc/bYDLSPVZ/image-removebg-preview.png" alt="user-photo" /> 
                        : <img src={this.props.user.image} alt="user-photo" /> }
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
                        {Object.values(this.props.connects).filter(connect => connect.sender_id === this.props.current_user.id && connect.receiver_id === this.props.user.id || connect.sender_id === this.props.user.id && connect.receiver_id === this.props.current_user.id).length === 0 ?
                        <button className="connect" onClick={() => this.sendConnect()}>Connect</button>
                        : Object.values(this.props.connects).filter(connect => connect.pending && connect.sender_id === this.props.current_user.id && connect.receiver_id === this.props.user.id || connect.sender_id === this.props.user.id && connect.receiver_id === this.props.current_user.id).length > 0 && Object.values(this.props.connects).filter(connect => connect.pending && connect.sender_id === this.props.current_user.id && connect.receiver_id === this.props.user.id || connect.sender_id === this.props.user.id && connect.receiver_id === this.props.current_user.id)[0].sender_id === this.props.current_user.id ? 
                        <button className="connect" id="pending" onClick={() => this.acceptConnect()}>Pending</button> 
                        : Object.values(this.props.connects).filter(connect => connect.pending && (connect.sender_id === this.props.current_user.id && connect.receiver_id === this.props.user.id || connect.sender_id === this.props.user.id && connect.receiver_id === this.props.current_user.id)).length > 0 && Object.values(this.props.connects).filter(connect => connect.pending && (connect.sender_id === this.props.current_user.id && connect.receiver_id === this.props.user.id || connect.sender_id === this.props.user.id && connect.receiver_id === this.props.current_user.id))[0].receiver_id === this.props.current_user.id ?
                        <button className="connect" onClick={() => this.acceptConnect()}>Accept</button>
                        : Object.values(this.props.connects).filter(connect => connect.accepted && connect.sender_id === this.props.current_user.id && connect.receiver_id === this.props.user.id || connect.sender_id === this.props.user.id && connect.receiver_id === this.props.current_user.id).length === 1 ? 
                        <button className="connect" onClick={() => this.deleteConnect()}>Disconnect</button>
                        : <button className="connect" onClick={() => this.deleteConnect()}>Disconnect</button>}
                    </div>
                </div>
            </div>
        )
    }
}

export default UserIndexItem;