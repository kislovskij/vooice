import React, { Component } from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import AddIcon from 'material-ui-icons/Add';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

export default class AddServer extends Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleAddServer = () => {
    this.props.onAddServer();
    this.handleClose();
  }

  render() {
    const { open } = this.state;

    return (
      <ListItem button onClick={this.handleClickOpen}>
        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add Server</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter the hostname of the server which you want to connect to.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="address"
              label="Address"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>
              Cancel
            </Button>
            <Button onClick={this.handleAddServer} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>
        <Avatar>
          <AddIcon />
        </Avatar>
        <ListItemText />
      </ListItem>
    );
  }
}
