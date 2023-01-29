import { Container } from '@mantine/core';
import GenreArticlesHeader from 'features/genre/components/GenreArticlesHeader';
import React from 'react';
import { Outlet } from 'react-router-dom';

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

const GenreLayout = () => {
  return (
    <>
      <HeaderAction {...{ tabs }} />
      <GenreArticlesHeader />
      <Container className="py-10">
        <Outlet />
      </Container>
      <FooterLinks {...{ data }} />
    </>
  );
};

export default GenreLayout;
