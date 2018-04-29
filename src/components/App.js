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

  setChannel = activeChannel => this.setState({ activeChannel });

  setUserName = name => {
    const { users } = this.state;
    users.push({ id: users.length, name });
    this.setState({ users });
  };

  addMessage = body => {
    const { messages } = this.state;
    messages.push({ id: messages.length, body });
    this.setChannel({ messages });
  };

  addChannel = name => {
    const { channels } = this.state;
    channels.push({ id: channels.length, name });
    this.setState({ channels });
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
