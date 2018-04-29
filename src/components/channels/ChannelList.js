import React, { Component } from 'react';
import { array, func, object } from 'prop-types';

import Channel from './Channel';

class ChannelList extends Component {
  static propTypes = {
    channels: array.isRequired, // eslint-disable-line
    setChannel: func.isRequired,
    activeChannel: object, // eslint-disable-line
  };

  render() {
    return (
      <ul>
        {this.props.channels.map(chan => (
          <Channel key={chan.id} channel={chan} {...this.props} />
        ))}
      </ul>
    );
  }
}

export default ChannelList;
