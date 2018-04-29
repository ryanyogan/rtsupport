import React, { Component } from 'react';
import { func } from 'prop-types';

class UserForm extends Component {
  static propTypes = {
    setUserName: func.isRequired,
  };

  state = {
    userName: '',
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.setUserName(this.state.userName);
    this.setState({ userName: '' });
  };

  onChange = e => this.setState({ [e.target.id]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="userName"
            value={this.state.userName}
            onChange={this.onChange}
            placeholder="Set Your Name..."
          />
        </div>
      </form>
    );
  }
}

export default UserForm;
