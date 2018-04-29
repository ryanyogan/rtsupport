import React, { Component } from 'react';
import ChannelSection from './channels/ChannelSection';
import './App.css';
import MessageSection from './messages/MessageSection';
import UserSection from './users/UserSection';

class App extends Component {
  state = {
    activeChannel: {},
    channels: [],
    messages: [],
    users: [],
    connected: false,
  };

  componentDidMount() {
    const ws = (this.ws = new WebSocket('ws://echo.websocket.org'));
    ws.onmessage = this.message;
    ws.onopen = this.open;
    ws.onclose = this.close;
  }

  setChannel = activeChannel => this.setState({ activeChannel });

  setUserName = name => {
    const { users } = this.state;
    users.push({ id: users.length, name });
    this.setState({ users });
  };

  message = e => {
    const event = JSON.parse(e.data);

    switch (event.name) {
      case 'channel add':
        return this.newChannel(event.data);
      default:
        return null;
    }
  };

  open = () => {
    this.setState({ connected: true });
  };

  close = () => {
    this.setState({ connected: false });
  };

  addMessage = body => {
    const { messages, users } = this.state;
    const createdAt = new Date();
    const author = users.length > 0 ? users[0].name : 'anonymous';
    messages.push({ id: messages.length, body, createdAt, author });
    this.setState({ messages });
  };

  addChannel = name => {
    const { channels } = this.state;

    // Temp message to echo
    const msg = JSON.stringify({
      name: 'channel add',
      data: {
        id: channels.length,
        name,
      },
    });

    this.ws.send(msg);
  };

  newChannel = channel => {
    const { channels } = this.state;
    channels.push(channel);
    this.setChannel({ channels });
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
