import { Space } from '@mantine/core';
import React from 'react';
import MyArticles from 'users/containers/MyArticles';
import UserInfo from 'users/containers/UserInfo';

const UserArticles = () => {
  return (
    <>
      <UserInfo />
      <Space h="lg" />
      <MyArticles />
    </>
  );
};

export default UserArticles;
