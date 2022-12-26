import React from 'react';
import { selectUser } from 'store/ducks/userSlice';
import { useAppSelector } from 'store/hooks';

import avatar from '/src/assets/avatar.png';

import ProfileForm from '../components/ProfileForm';

const profile = {
  nickname: '',
  twitterUsername: '',
  githubUsername: '',
  description: '',
  avatar,
};

const Profile = () => {
  const user = useAppSelector(selectUser);
  return (
    <>
      <ProfileForm
        nickname={user.nickname}
        twitterUsername=""
        githubUsername=""
        description={user.description}
        avatar={user.avatar}
      />
    </>
  );
};

export default Profile;
