import React from 'react';
import UserList from './UserList';
import UserForm from './UserForm';

const UserSection = ({ ...props }) => (
  <div className="support panel panel-primary">
    <div className="panel-heading">
      <storng>Users</storng>
    </div>
    <div className="panel-body users">
      <UserList {...props} />
      <UserForm {...props} />
    </div>
  </div>
);

export default UserSection;
