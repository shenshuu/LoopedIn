import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Sidebar from './sidebar';

const mapStateToProps = state => {
    return {
        user: state.entities.users[state.session.id],
    }
};

export default withRouter(connect(mapStateToProps, null)(Sidebar));