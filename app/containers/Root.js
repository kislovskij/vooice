// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Routes from '../routes';
import blueGrey from 'material-ui/colors/blueGrey';
import grey from 'material-ui/colors/grey';

type RootType = {
  store: {},
  history: {}
};

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: grey,
  }
});

export default function Root({ store, history }: RootType) {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MuiThemeProvider theme={theme}>
          <Routes />
        </MuiThemeProvider>
      </ConnectedRouter>
    </Provider>
  );
}
