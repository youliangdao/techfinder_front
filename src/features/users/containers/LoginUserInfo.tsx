import React from 'react';
import { selectUser } from 'store/ducks/userSlice';
import { useAppSelector } from 'store/hooks';
import LoginUserInfoAction from 'users/components/LoginUserInfoAction';

const LoginUserInfo = () => {
  const currentUser = useAppSelector(selectUser);
  return (
    <LoginUserInfoAction
      name={currentUser.nickname}
      avatar={currentUser.avatar}
      description={currentUser.description}
      twitterUsername={currentUser.twitterUsername}
      githubUsername={currentUser.githubUsername}
    />
  );
};

export default LoginUserInfo;
