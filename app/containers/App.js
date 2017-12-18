// @flow
import React, { Component } from 'react';
import type { Children } from 'react';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

import TopBar from '../components/TopBar'
import ServerBar from '../components/ServerBar'


const styles = theme => ({
  root: {
    width: '100%',
    height: '100vh',
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  }
})

class App extends Component {
  props: {
    children: Children
  };

  state = {
    open: false,
  };

  constructor(props) {
    super(props);

    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <TopBar open={this.state.open} onDrawerOpen={this.handleDrawerOpen} />
          <ServerBar open={this.state.open} onDrawerClose={this.handleDrawerClose} />
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
