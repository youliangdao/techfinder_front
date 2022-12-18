import React from 'react';

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
  return (
    <>
      <ProfileForm {...profile} />
    </>
  );
};

export default Profile;
