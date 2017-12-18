// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import FolderIcon from 'material-ui-icons/Folder';
import AddIcon from 'material-ui-icons/Add';

const styles = theme => ({
})

class ServerList extends Component {
  render() {

    return (
      <List>
        <ListItem button>
          <Avatar>
            <FolderIcon />
          </Avatar>
          <ListItemText primary="Münchhausen" secondary="voice.kislovskij.com" />
        </ListItem>
        <ListItem button>
          <Avatar>
            <FolderIcon />
          </Avatar>
          <ListItemText primary="Münchhausen" secondary="5.138.24.17" />
        </ListItem>
        <ListItem button>
          <Avatar>
            <FolderIcon />
          </Avatar>
          <ListItemText primary="Münchhausen" secondary="lobby.voice.com" />
        </ListItem>
        <ListItem button>
          <Avatar>
            <AddIcon />
          </Avatar>
          <ListItemText />
        </ListItem>
      </List>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ServerList);
