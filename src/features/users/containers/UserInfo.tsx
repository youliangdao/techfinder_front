import React from 'react';
import UserInfoAction from 'users/components/UserInfoAction';
import { useQueryUser } from 'users/hooks/useQueryUser';

const UserInfo = ({ id }: { id: string }) => {
  const { data } = useQueryUser(id);
  return (
    <UserInfoAction
      avatar={data?.avatar || ''}
      name={data?.nickname || ''}
      description={data?.description || ''}
      githubUsername={data?.githubUsername || ''}
      twitterUsername={data?.twitterUsername || ''}
    />
  );
};

export default UserInfo;
