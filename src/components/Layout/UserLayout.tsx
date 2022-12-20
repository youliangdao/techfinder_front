import { Container } from '@mantine/core';
import React, { FC, ReactNode } from 'react';

import FooterLinks from '../Footer';
import HeaderAction from '../HeaderAction';

const links = [
  {
    link: '/articles/all',
    label: 'About',
  },
  {
    link: '',
    label: 'Search',
    links: [
      {
        link: '/categories',
        label: 'カテゴリから探す',
      },
      {
        link: '/articles/all',
        label: '記事から探す',
      },
    ],
  },
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

const isLogin = true;

type UserLayoutProps = {
  children: ReactNode;
};

const UserLayout: FC<UserLayoutProps> = ({ children }) => {
  return (
    <>
      <HeaderAction {...{ links, isLogin }} />
      <Container className="py-10">{children}</Container>
      <FooterLinks {...{ data }} />
    </>
  );
};

export default UserLayout;
