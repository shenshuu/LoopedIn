import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

class PendingModal extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        const toDelete = Object.values(this.props.connects).filter(connect => connect.pending && (connect.sender_id === this.props.current_user.id && connect.receiver_id === this.props.user.id));
        if (toDelete.length > 0) {
            this.props.deleteConnect(toDelete[0]);
        }
        this.props.togglePendingModal();
    }

    render() {
        return (
            <div id="pending-modal-overlay" onClick={(e) => {
                this.props.togglePendingModal();
                e.stopPropagation();
            }}>
                <div id="pending-modal" onClick={e => e.stopPropagation()}>
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
                        <div id="pending-modal-withdraw" onClick={() => this.handleDelete()}>Withdraw</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PendingModal;