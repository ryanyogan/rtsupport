import React, { Component } from 'react';
import { func } from 'prop-types';

class ChannelForm extends Component {
  static propTypes = {
    addChannel: func.isRequired
  };

  state = {
    channelName: ''
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addChannel(this.state.channelName);
    this.setState({ channelName: '' });
  };

  handleChange = e => this.setState({ [e.target.id]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            placeholder="Add Channel"
            type="text"
            id="channelName"
            value={this.state.channelName}
            onChange={this.handleChange}
          />
        </div>
      </form>
    );
  }
}

export default ChannelForm;
