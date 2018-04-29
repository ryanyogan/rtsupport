import React, { Component } from 'react';
import { object, func } from 'prop-types';

class Channel extends Component {
  static propTypes = {
    channel: object.isRequired, // eslint-disable-line
    setChannel: func.isRequired,
    activeChannel: object, // eslint-disable-line
  };

  onClick = e => {
    e.preventDefault();
    const { setChannel, channel } = this.props;
    setChannel(channel);
  };

  render() {
    const { channel, activeChannel } = this.props;
    const active = channel === activeChannel ? 'active' : '';
    return (
      <li className={active}>
        <a onClick={this.onClick} role="link">
          {channel.name}
        </a>
      </li>
    );
  }
}

export default Channel;
