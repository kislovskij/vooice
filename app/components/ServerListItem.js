// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

import { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import FolderIcon from 'material-ui-icons/Folder';

const styles = theme => ({
})

class ServerListItem extends Component {
  props: {
    address: string
  };

  render() {
    return (
      <ListItem button>
        <Avatar>
          <FolderIcon />
        </Avatar>
        <ListItemText primary="Münchhausen" secondary="voice.kislovskij.com" />
      </ListItem>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ServerListItem);
