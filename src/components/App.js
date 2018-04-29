import React, { Component } from 'react';
import ChannelSection from './channels/ChannelSection';
import './App.css';
import MessageSection from './messages/MessageSection';
import UserSection from './users/UserSection';
import Socket from '../lib/socket';

class App extends Component {
  state = {
    activeChannel: {},
    channels: [],
    messages: [],
    users: [],
    connected: false,
  };

  componentDidMount() {
    const socket = (this.socket = new Socket());
    socket.on('connect', this.onConnect);
    socket.on('disconnect', this.onDisconnect);
    socket.on('channel add', this.onAddChannel);
    socket.on('user add', this.onAddUser);
    socket.on('user edit', this.onEditUser);
    socket.on('user remove', this.onRemoveUser);
    socket.on('message add', this.onMessageAdd);
  }

  onConnect = () => {
    this.setState({ connected: true });
    this.socket.emit('channel subscribe');
    this.socket.emit('user subscribe');
  };

  onDisconnect = () => this.setState({ connected: false });

  onAddChannel = channel => {
    const { channels } = this.state;
    channels.push(channel);
    this.setState({ channels });
  };

  onAddUser = user => {
    const { users } = this.state;
    users.push(user);
    this.setState({ users });
  };

  onEditUser = editUser => {
    const { currentUsers } = this.state;
    const users = currentUsers.map(user => {
      if (editUser.id === user.id) {
        return editUser;
      }
      return user;
    });
    this.setState({ users });
  };

  onRemoveUser = removeUser => {
    const { currentUsers } = this.state;
    const users = currentUsers.filter(user => user.id !== removeUser.id);
    this.setState({ users });
  };

  onMessageAdd = message => {
    const { messages } = this.state;
    messages.push(message);
    this.setState({ messages });
  };

  setChannel = activeChannel => {
    this.setState({ activeChannel });
    this.socket.emit('message unsubscribe');
    this.setState({ messages: [] });
    this.socket.emit('message subscribe', { channelId: activeChannel.id });
  };

  setUserName = name => this.socket.emit('user edit', { name });

  addChannel = name => this.socket.emit('channel add', { name });

  addMessage = body => {
    const { activeChannel } = this.state;
    this.socket.emit('message add', { channelId: activeChannel.id, body });
  };

  render() {
    return (
      <div className="app">
        <div className="nav">
          <ChannelSection
            {...this.state}
            addChannel={this.addChannel}
            setChannel={this.setChannel}
          />
          <UserSection {...this.state} setUserName={this.setUserName} />
        </div>
        <MessageSection {...this.state} addMessage={this.addMessage} />
      </div>
    );
  }
}

export default App;
