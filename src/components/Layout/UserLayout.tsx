import { Container } from '@mantine/core';
import React, { FC, ReactNode } from 'react';

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

type UserLayoutProps = {
  children: ReactNode;
};

const UserLayout: FC<UserLayoutProps> = ({ children }) => {
  return (
    <>
      <HeaderAction {...{ tabs }} />
      <Container className="py-10">{children}</Container>
      <FooterLinks {...{ data }} />
    </>
  );
};

export default UserLayout;
