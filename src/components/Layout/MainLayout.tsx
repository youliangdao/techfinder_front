import { Container } from '@mantine/core';
import React from 'react';
import { Outlet } from 'react-router-dom';

import FooterLinks from '../Footer';
import HeaderAction from '../HeaderAction';

const links = [
  {
    link: '/about',
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
        link: '/articles',
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

const MainLayout = () => {
  return (
    <>
      <HeaderAction {...{ links, isLogin }} />
      <Container className="py-10">
        <Outlet />
      </Container>
      <FooterLinks {...{ data }} />
    </>
  );
};

export default MainLayout;
