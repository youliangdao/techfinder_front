import { Container } from '@mantine/core';
import React, { FC, ReactNode } from 'react';
import { selectUser } from 'store/ducks/userSlice';
import { useAppSelector } from 'store/hooks';

import FooterLinks from '../Footer';
import HeaderAction from '../HeaderAction';

const links = [
  {
    link: '/about',
    label: 'TechFinderについて',
  },
  {
    link: '/categories',
    label: 'カテゴリから探す',
  },
  {
    link: '/articles/all',
    label: '記事から探す',
  },
  // {
  //   link: '',
  //   label: 'Search',
  //   links: [
  //     {
  //       link: '/categories',
  //       label: 'カテゴリから探す',
  //     },
  //     {
  //       link: '/articles/all',
  //       label: '記事から探す',
  //     },
  //   ],
  // },
];

const data = [
  {
    link: '#',
    label: 'プライバシーポリシー',
  },
  {
    link: '#',
    label: '利用規約',
  },
];

type UserLayoutProps = {
  children: ReactNode;
};

const UserLayout: FC<UserLayoutProps> = ({ children }) => {
  const user = useAppSelector(selectUser);
  const isLogin = user.uid ? true : false;
  return (
    <>
      <HeaderAction {...{ links, isLogin }} />
      <Container className="py-10">{children}</Container>
      <FooterLinks {...{ data }} />
    </>
  );
};

export default UserLayout;
