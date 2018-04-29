import React, { Component } from 'react';
import { func, object } from 'prop-types';

class MessageForm extends Component {
  static propTypes = {
    activeChannel: object.isRequired, // eslint-disable-line
    addMessage: func.isRequired,
  };

  state = {
    message: '',
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addMessage(this.state.message);
    this.setState({ message: '' });
  };

  onChange = e => this.setState({ [e.target.id]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          {this.props.activeChannel.id !== undefined && (
            <input
              type="text"
              className="form-control"
              id="message"
              value={this.state.message}
              onChange={this.onChange}
              placeholder="Add Message..."
            />
          )}
        </div>
      </form>
    );
  }
}

export default MessageForm;
