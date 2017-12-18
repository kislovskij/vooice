// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

import Typography from 'material-ui/Typography';

const styles = theme => ({
  content: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: 24,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  }
})

class Home extends Component {
  render() {
    const { classes, theme } = this.props;

    return (
      <main className={classes.content}>
        <Typography noWrap>{'You think water moves fast? You should see ice.'}</Typography>
      </main>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Home);
