import HeaderContainer from '../splash/header_container';
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
                        </div>
                    </div>

                    <div className="network-container-right">
                        data
                    </div>
                </div>
            </div>
        )
    }
}

export default Network;