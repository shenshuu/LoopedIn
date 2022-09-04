import HeaderContainer from '../splash/header_container';
import NetworkItemContainer from './network_item_container';
import { HiUserGroup, HiHashtag } from 'react-icons/hi';
import { TiContacts } from 'react-icons/ti';
import React from 'react';


class Network extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
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
                                {'<LoopedIn logo>'} LoopedIn Corporation (c) 2022
                            </div>
                        </div>
                    </div>

                    <div className="network-container-right">
                        {Object.values(this.props.users).map((user, i) => {
                            return <NetworkItemContainer user={user} key={user+i} />
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Network;