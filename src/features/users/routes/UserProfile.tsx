import { Head } from 'components/Head/Head';
import UserLayout from 'Layout/UserLayout';
import React from 'react';
import { selectUser } from 'store/ducks/userSlice';
import { useAppSelector } from 'store/hooks';
import Profile from 'users/containers/Profile';

const UserProfile = () => {
  const currentUser = useAppSelector(selectUser);
  return (
    <UserLayout>
      <Head title={`${currentUser.nickname}のプロフィール`} />
      <Profile />
    </UserLayout>
  );
};

export default UserProfile;
