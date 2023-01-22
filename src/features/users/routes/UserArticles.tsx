import { Container, Loader, Space } from '@mantine/core';
import { Head } from 'components/Head/Head';
import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { selectUser } from 'store/ducks/userSlice';
import { useAppSelector } from 'store/hooks';
import UserArticlesContainer from 'users/containers/UserArticlesContainer';
import UserInfo from 'users/containers/UserInfo';
import { useQueryUser } from 'users/hooks/useQueryUser';

const UserArticles = () => {
  const params = useParams();
  const currentUser = useAppSelector(selectUser);
  const { data } = useQueryUser(params.userId || '');

  if (currentUser.authChecked) {
    if (currentUser.apiChecked) {
      if (currentUser.uid) {
        return currentUser.uid === data?.uid ? (
          <Navigate to="/dashboards/all" />
        ) : (
          <>
            <Head title={`${data?.nickname}さんのダッシュボード`} />
            <UserInfo id={params.userId || ''} />
            <Space h="lg" />
            <UserArticlesContainer id={params.userId || ''} />
          </>
        );
      } else {
        return (
          <Container className="flex items-center justify-center py-60">
            <Loader />
          </Container>
        );
      }
    } else {
      return (
        <>
          <Head title={`${data?.nickname}さんのダッシュボード`} />
          <UserInfo id={params.userId || ''} />
          <Space h="lg" />
          <UserArticlesContainer id={params.userId || ''} />
        </>
      );
    }
  } else {
    return (
      <Container className="flex items-center justify-center py-60">
        <Loader />
      </Container>
    );
  }
};

export default UserArticles;
