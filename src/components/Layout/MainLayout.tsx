import { Container } from '@mantine/core';
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import FooterLinks from '../Footer';
import HeaderAction from '../HeaderAction';

const tabs = [
  {
    link: 'beginner',
    label: '個人開発の基本',
  },
  {
    link: 'idea',
    label: 'アイデア',
  },
  {
    link: 'design',
    label: 'デザイン',
  },
  {
    link: 'architecture',
    label: 'インフラ・アーキテクチャ',
  },
  {
    link: 'backend',
    label: 'バックエンド',
  },
  {
    link: 'frontend',
    label: 'フロントエンド',
  },
  {
    link: 'release',
    label: 'リリース・運用',
  },
];

const data = [
  {
    link: '/about',
    label: 'TechFinderについて',
  },
  {
    link: '/privacy-policy',
    label: 'プライバシーポリシー',
  },
  {
    link: '/terms',
    label: '利用規約',
  },
];

const MainLayout = () => {
  const location = useLocation();

  return (
    <>
      <HeaderAction {...{ tabs }} />
      {location.pathname === '/categories' ||
      location.pathname === '/dashboards/all' ||
      location.pathname === '/dashboards/bookmarks' ||
      location.pathname === '/dashboards/comments' ||
      location.pathname === '/dashboards/likes' ? (
        <Container className="py-10">
          <Outlet />
        </Container>
      ) : (
        <Container className="py-10" size="lg">
          <Outlet />
        </Container>
      )}
      <FooterLinks {...{ data }} />
    </>
  );
};

export default MainLayout;
