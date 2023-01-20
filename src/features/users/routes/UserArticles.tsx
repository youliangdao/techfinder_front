import { Space } from '@mantine/core';
import NotFoundTitle from 'components/NotFoundTitle';
import React from 'react';
import { useParams } from 'react-router-dom';
import MyArticles from 'users/containers/MyArticles';
import UserInfo from 'users/containers/UserInfo';

const UserArticles = () => {
  const params = useParams();
  if (
    params.tab === 'bookmarks' ||
    params.tab === 'comments' ||
    params.tab === 'likes' ||
    params.tab === 'all'
  ) {
    return (
      <>
        <UserInfo />
        <Space h="lg" />
        <MyArticles />
      </>
    );
  }
  return <NotFoundTitle />;
};

export default UserArticles;
