import React from 'react';
import { array } from 'prop-types';
import User from './User';

const UserList = ({ users }) => (
  <ul>{users.map(user => <User key={user.id} user={user} />)}</ul>
);

UserList.propTypes = {
  users: array.isRequired, // eslint-disable-line
};

export default UserList;
