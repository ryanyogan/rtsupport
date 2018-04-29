import React, { Component } from 'react';
import { func, array, object } from 'prop-types';
import ChannelForm from './ChannelForm';
import ChannelList from './ChannelList';

class ChannelSection extends Component {
  static propTypes = {
    channels: array.isRequired, // eslint-disable-line
    setChannel: func.isRequired,
    addChannel: func.isRequired,
    activeChannel: object.isRequired, // eslint-disable-line
  };

  render() {
    return (
      <div className="support panel panel-primary">
        <div className="panel-heading">
          <strong>Channels</strong>
        </div>
        <div className="panel-body channels">
          <ChannelList {...this.props} />
          <ChannelForm {...this.props} />
        </div>
      </div>
    );
  }
}

export default ChannelSection;
