import HeaderContainer from '../splash/header_container';
import React from 'react';


class Network extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.deletePosts();
        this.props.deleteLikes();
        this.props.deleteComments();
        this.props.fetchUsers();
    }

    render() {
        return (
            <div>
                <HeaderContainer />
                <div>

                </div>
            </div>
        )
    }
}

export default Network;