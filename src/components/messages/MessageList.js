import React from 'react';
import { array } from 'prop-types';
import Message from './Message';

const MessageList = ({ messages }) => (
  <ul>
    {messages.map(message => <Message key={message.id} message={message} />)}
  </ul>
);

MessageList.propTypes = {
  messages: array.isRequired, // eslint-disable-line
};

export default MessageList;
