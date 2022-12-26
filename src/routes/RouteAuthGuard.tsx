import { Center, Loader } from '@mantine/core';
import UserLayout from 'Layout/UserLayout';
import { useFirebaseAuth } from 'lib/auth/auth';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

type RouteAuthGuardProps = {
  component: React.ReactNode;
  redirect: string;
};

export const RouteAuthGuard = (props: RouteAuthGuardProps) => {
  const location = useLocation();
  const { currentUser, authChecked } = useFirebaseAuth();

  if (authChecked) {
    if (currentUser.uid) {
      return <>{props.component}</>;
    } else {
      return (
        <Navigate
          to={props.redirect}
          state={{ from: location }}
          replace={false}
        />
      );
    }
  } else {
    return (
      <UserLayout>
        <Center>
          <Loader />
        </Center>
      </UserLayout>
    );
  }
};
