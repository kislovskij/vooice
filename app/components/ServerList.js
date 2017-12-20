// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import FolderIcon from 'material-ui-icons/Folder';

import ServerListItem from './ServerListItem';
import AddServer from './AddServer';

const styles = theme => ({
})

class ServerList extends Component {
  props: {
    server: Object,
    setActiveServer: (id) => void,
    addServer: () => void,
    connectServer: () => void
  };

  constructor(props) {
    super(props);
    this.handleAddServer = this.handleAddServer.bind(this);
    this.handleSetActiveServer = this.handleSetActiveServer.bind(this);
  }

  handleAddServer() {
    const { id } = this.props.addServer({ address: '127.0.0.1:3000' });
    this.handleSetActiveServer(id);
  }

  handleSetActiveServer(id) {
    this.props.setActiveServer(id);
    this.props.connectServer(id);
  }

  render() {
    return (
      <List>
        {this.props.server.servers.map(server => (
          <ServerListItem key={server.id} active={this.props.server.activeServer.id === server.id} onActivate={this.handleSetActiveServer} {...server} />
        ))}
        <AddServer onAddServer={this.handleAddServer} />
      </List>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ServerList);
