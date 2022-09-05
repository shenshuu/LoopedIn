import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

class PendingModal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="pending-modal-container">
                <div id="pending-modal-overlay" onClick={this.props.togglePendingModal}></div>
                <div id="pending-modal-header">
                    <p id="pending-modal-title">Withdraw invitation</p>
                    <div id="close-pending-modal" onClick={this.props.togglePendingModal}><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></div>
                </div>
                <div id="pending-modal-separator"></div>
                <div id="pending-modal-body">
                    Are you sure you want to withdraw your invitation?
                </div>
                <div id="pending-modal-buttons">
                    <div id="pending-modal-cancel" onClick={this.props.togglePendingModal}>Cancel</div>
                    <div id="pending-modal-withdraw">Withdraw</div>
                </div>
            </div>
        )
    }
}

export default PendingModal;