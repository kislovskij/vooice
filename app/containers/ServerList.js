import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ServerList from '../components/ServerList';
import * as ServerActions from '../actions/servers';

function mapStateToProps(state) {
  return {
    servers: state.servers
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ServerActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerList);
