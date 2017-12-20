// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

import { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { CircularProgress } from 'material-ui/Progress';

const styles = theme => ({
})

class ServerListItem extends Component {
  props: {
    address: string,
    connecting: boolean
  };

  render() {
    const { classes, address, connecting } = this.props;

    return (
      <ListItem button>
        <Avatar>
          { connecting && <CircularProgress className={classes.progress} color="primary" /> }
          { !connecting && <span>VK</span> }
        </Avatar>
        <ListItemText primary={ connecting ? 'Connecting…' : 'Connected' } secondary={address} />
      </ListItem>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ServerListItem);
