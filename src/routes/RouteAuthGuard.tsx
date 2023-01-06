import { Center, Container, Loader } from '@mantine/core';
import UserLayout from 'Layout/UserLayout';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { selectUser } from 'store/ducks/userSlice';
import { useAppSelector } from 'store/hooks';

type RouteAuthGuardProps = {
  component: React.ReactNode;
  redirect: string;
};

export const RouteAuthGuard = ({
  component,
  redirect,
}: RouteAuthGuardProps) => {
  const location = useLocation();
  const currentUser = useAppSelector(selectUser);

  if (currentUser.authChecked) {
    if (currentUser.apiChecked) {
      if (currentUser.uid) {
        return <>{component}</>;
      } else {
        if (location.pathname === '/profile') {
          return (
            <UserLayout>
              <Center>
                <Loader />
              </Center>
            </UserLayout>
          );
        } else {
          return (
            <Container className="flex h-screen items-center justify-center">
              <Loader />
            </Container>
          );
        }
      }
    } else {
      return (
        <Navigate to={redirect} state={{ from: location }} replace={false} />
      );
    }
  } else {
    if (location.pathname === '/profile') {
      return (
        <UserLayout>
          <Center>
            <Loader />
          </Center>
        </UserLayout>
      );
    } else {
      return (
        <Container className="flex h-screen items-center justify-center">
          <Loader />
        </Container>
      );
    }
  }
};
