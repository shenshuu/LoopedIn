import HeaderContainer from '../splash/header_container';
import NetworkItemContainer from './network_item_container';
import { HiUserGroup, HiHashtag } from 'react-icons/hi';
import NetworkInvitationItemContainer from './network_invitation_item_container';
import { TiContacts } from 'react-icons/ti';
import React from 'react';


class Network extends React.Component {
    constructor(props) {
        super(props);
        this.renderNetworkPage = this.renderNetworkPage.bind(this);
    }

    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchConnects();
    }

    renderNetworkPage() {
        return (
            <div className="network-page">
                <HeaderContainer />
                <div className="network-container">
                    <div className="network-container-left">
                        <p className="network-left-title">Manage my network</p>
                        <div className="network-contents-left">
                            <div className="network-content-left">
                                <div className="network-icon"><HiUserGroup /></div>
                                <p>Connections</p>
                            </div>
                            <div className="network-content-left">
                            <div className="network-icon"><TiContacts /></div>
                                <p>Contacts</p>
                            </div>
                            <div className="network-content-left">
                            <div className="network-icon"><HiHashtag /></div>
                                <p>Hashtags</p>
                            </div>
                    
                            <div className="network-content-left-footer">
                                <div className="network-footer-divider"></div>
                                <div className="network-left-footer-links">
                                    <p className="network-left-footer-link">About</p>
                                    <p className="network-left-footer-link">Accessibility</p>
                                    <p className="network-left-footer-link">Help Center</p>
                                </div>
                                <div className="network-left-footer-links">
                                    <p className="network-left-footer-link">Privacy & Terms</p>
                                    <p className="network-left-footer-link">Ad Choices</p>
                                </div>
                                <div className="network-left-footer-links">
                                    <p className="network-left-footer-link">Advertising</p>
                                    <p className="network-left-footer-link">Business Services</p>
                                </div>
                                <div className="network-left-footer-links">
                                    <p className="network-left-footer-link">Get the LoopedIn app</p>
                                    <p className="network-left-footer-link">More</p>
                                </div>
                                <p id="loopedin-copyright-info">{'<LoopedIn logo>'} LoopedIn Corporation &copy; 2022</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="network-invitations">
                            <p className="network-left-title">Invitations</p>
                            <div className="network-invitations-divider"></div>
                            {Object.values(this.props.connects).filter((connect) => connect.pending && connect.receiver_id === this.props.current_user.id)
                            .map((connect, i) => <NetworkInvitationItemContainer users={this.props.users} connects={this.props.connects} current_user={this.props.current_user} user={this.props.users[connect.sender_id]} key={connect+i+Math.random()*100000}/>)}
                        </div>
                        <div className="network-container-right-parent">
                            <div className="network-right-header-container">
                                <p className="network-container-right-header">People you may know</p>
                            </div>
                            <div className="network-container-right">
                                {Object.values(this.props.users).map((user, i) => {
                                    if (i < 6 && this.props.current_user.id !== user.id) {
                                        return <NetworkItemContainer user={user} key={user+i} />
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return this.props.current_user && this.renderNetworkPage();
    }
}

export default Network;