import React from 'react';

class UserIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleConnect = this.handleConnect.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleConnect() {
        // const filteredConnects = Object.values(this.props.connects).filter(connect => connect.user1_id === this.props.current_user.id && connect.user2_id === this.props.user.id || connect.user1_id === this.props.user.id && connect.user2_id === this.props.current_user.id)
        // if (filteredConnects.length > 0) {
        //     this.props.deleteConnect(filteredConnects[0]);
        // } else {
        //     this.props.createConnect({
        //         user1_id: this.props.current_user.id,
        //         user2_id: this.props.user.id,
        //     });
        // }
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
                        {true ? 
                        <button className="connect" onClick={() => this.handleConnect()}>Connect</button>
                        :<button className="connect" onClick={() => this.handleConnect()}>Disconnect</button>}
                    </div>
                </div>
            </div>
        )
    }
}

export default UserIndexItem;