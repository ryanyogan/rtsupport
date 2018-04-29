import React from 'react';
import { func, object, array } from 'prop-types';
import MessageList from './MessageList';
import MessageForm from './MessageForm';

const MessageSection = ({ activeChannel, ...props }) => (
  <div className="messages-container panel panel-default">
    <div className="panel-heading">
      <strong>{activeChannel.name || 'Select A Channel'}</strong>
    </div>
    <div className="panel-body messages">
      <MessageList activeChannel={activeChannel} {...props} />
      <MessageForm activeChannel={activeChannel} {...props} />
    </div>
  </div>
);

MessageSection.propTypes = {
  messages: array.isRequired, // eslint-disable-line
  activeChannel: object.isRequired, // eslint-disable-line
  addMessage: func.isRequired,
};

export default MessageSection;
