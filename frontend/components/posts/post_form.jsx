import CreateIcon from '@mui/icons-material/Create';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import React from 'react';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.postOption = this.postOption.bind(this);
    }

    postOption() {
        return (
            <div className="post-option">
                <div className="option">
                    <InsertPhotoIcon className="photo-icon"/>
                    <p>Photo</p>
                </div>
                <div className="option">
                    <SubscriptionsIcon className="video-icon"/>
                    <p>Video</p>
                </div>
                <div className="option">
                    <EventNoteIcon className="event-icon"/>
                    <p>Event</p>
                </div>
                <div className="option">
                    <CalendarViewDayIcon className="article-icon"/>
                    <p>Write article</p>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="post-form-content">
                <div className="post-form-container">
                    <CreateIcon />
                    <form className="post-form">
                        <input type="text" 
                        placeholder="Have a topic that excites you? Post about it"/>
                        <button type="submit">Send</button>
                    </form>
                </div>
                {this.postOption()}
            </div>
        )
    }
}

export default PostForm;