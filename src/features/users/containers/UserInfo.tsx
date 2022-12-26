import React from 'react';
import { selectUser } from 'store/ducks/userSlice';
import { useAppSelector } from 'store/hooks';
import UserInfoAction from 'users/components/UserInfoAction';

const UserInfo = () => {
  const user = useAppSelector(selectUser);
  return (
    <UserInfoAction
      name={user.nickname}
      avatar={user.avatar}
      description={user.description}
    />
  );
};

export default UserInfo;
