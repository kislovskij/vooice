// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

import { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { CircularProgress } from 'material-ui/Progress';

const styles = theme => ({
  active: {
    background: theme.palette.primary[500]
  }
})

class ServerListItem extends Component {
  props: {
    id: string,
    address: string,
    active: boolean,
    connecting: boolean,
    onActivate: () => void
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onActivate(this.props.id);
  }

  render() {
    const { classes, address, connecting, active } = this.props;

    return (
      <ListItem className={active && classes.active} button onClick={this.handleClick}>
        <Avatar className={classes.icon}>
          { connecting && <CircularProgress className={classes.progress} color="primary" /> }
          { !connecting && <span>VK</span> }
        </Avatar>
        <ListItemText classes={{ text: classes.text }} primary={ connecting ? 'Connecting…' : 'Connected' } secondary={address} />
      </ListItem>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ServerListItem);
