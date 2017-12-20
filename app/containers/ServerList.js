import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ServerList from '../components/ServerList';
import * as ServerActions from '../actions/server';

function mapStateToProps(state) {
  return {
    server: state.server
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ServerActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerList);
