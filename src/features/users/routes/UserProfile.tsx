import UserLayout from 'Layout/UserLayout';
import React from 'react';
import Profile from 'users/containers/Profile';

const UserProfile = () => {
  return (
    <UserLayout>
      <Profile />
    </UserLayout>
  );
};

export default UserProfile;
