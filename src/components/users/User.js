import React from 'react';
import { object } from 'prop-types';

const User = ({ user }) => <li>{user.name}</li>;

User.propTypes = {
  user: object.isRequired, // eslint-disable-line
};

export default User;
