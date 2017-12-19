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
    servers: array,
    addServer: () => void
  };

  constructor(props) {
    super(props);

    this.handleAddServer = this.handleAddServer.bind(this);
  }

  handleAddServer() {
    this.props.addServer({ address: 'localhost:1234' })
  };

  render() {
    return (
      <List>
        {this.props.servers.map(server => (
          <ServerListItem key={server.id} {...server} />
        ))}
        <AddServer onAddServer={this.handleAddServer} />
      </List>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ServerList);
