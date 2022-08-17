import { connect } from 'react-redux';
import Sidebar from './sidebar';

const mapStateToProps = state => {
    return {
        user: state.entities.users[state.session.id],
    }
};

export default connect(mapStateToProps, null)(Sidebar);