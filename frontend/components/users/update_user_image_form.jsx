// import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

class UpdateUserImageForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('user[image]', e.target[0].files[0]);
        formData.append('user[first_name]', this.props.user.first_name);
        formData.append('user[last_name]', this.props.user.last_name);
        formData.append('user[location_city]', this.props.user.location_city);
        formData.append('user[location_country]', this.props.user.location_country);
        formData.append('user[headline]', this.props.user.headline);
        formData.append('user[email]', this.props.user.email);
        formData.append('user[pronouns]', this.props.user.pronouns);
        // formData.append('user[about]', this.props.user.about);
        formData.append('user[id]', this.props.user.id)
        $.ajax({
            url: `/api/users/${this.props.user.id}`,
            method: 'PATCH',
            data: formData,
            contentType: false,
            processData: false,
        })
        this.props.toggleModal();
    }

    render() {
        return (
            <div>
                <div id="overlay" onClick={this.props.toggleModal}></div>
                <div className="create-post-modal">
                    <div className="create-post-modal-header">
                        <h2>Add photo</h2>
                        <div className="close-create-post-modal" onClick={this.props.toggleModal}>
                            {/* <CloseRoundedIcon /> */}
                            <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                        </div>
                    </div>
                    <div className="create-post-modal-header-divider"></div>
                    <form className="create-post-form" onSubmit={this.handleSubmit}>
                        <div className="create-post-modal-footer">
                            <div>
                                <input type="file" accept="image/png, image/jpeg" />
                                {/* <InsertPhotoIcon /> */}
                            </div>
                            <button type="submit" className="create-post-btn">Post</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default UpdateUserImageForm;