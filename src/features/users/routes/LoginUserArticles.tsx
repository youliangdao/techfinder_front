import { Space } from '@mantine/core';
import { Head } from 'components/Head/Head';
import NotFoundTitle from 'components/NotFoundTitle';
import React from 'react';
import { useParams } from 'react-router-dom';
import { selectUser } from 'store/ducks/userSlice';
import { useAppSelector } from 'store/hooks';
import LoginUserInfo from 'users/containers/LoginUserInfo';
import MyArticles from 'users/containers/MyArticles';

const LoginUserArticles = () => {
  const params = useParams();
  const currentUser = useAppSelector(selectUser);

  if (
    params.tab === 'bookmarks' ||
    params.tab === 'comments' ||
    params.tab === 'likes' ||
    params.tab === 'all'
  ) {
    return (
      <>
        {/* {params.userId ? <UserInfo id={params.userId} /> : <LoginUserInfo />}
        <Space h="lg" />
        {params.userId ? (
          <UserArticlesContainer id={params.userId} />
        ) : (
          <MyArticles />
        )} */}
        <Head title={`${currentUser.nickname}さんのダッシュボード`} />
        <LoginUserInfo />
        <Space h="lg" />
        <MyArticles />
      </>
    );
  }
  return <NotFoundTitle />;
};

export default LoginUserArticles;
