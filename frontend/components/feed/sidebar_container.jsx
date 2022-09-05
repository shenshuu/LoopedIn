import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Sidebar from './sidebar';

const mapStateToProps = state => ({
    user: state.entities.users[state.session.id],
    connects: state.entities.connects,
});

export default withRouter(connect(mapStateToProps, null)(Sidebar));