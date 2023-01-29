/* eslint-disable tailwindcss/no-custom-classname */
import { Center, Container, Stack, Title } from '@mantine/core';
import { Head } from 'components/Head/Head';
import React, { FC, ReactNode } from 'react';

import { ReactComponent as HeroSVG } from '/src/assets/hero.svg';

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
    link: `/privacy-policy`,
    label: 'プライバシーポリシー',
  },
  {
    link: '/terms',
    label: '利用規約',
  },
];

const HeroContents = () => {
  return (
    <div className="bg-m_gray-0">
      <div className="flex justify-center space-x-1">
        <HeroSVG className="max-xs:h-40 h-52" />
        <Center>
          <Title
            className="max-xs:text-base max-xs:font-bold text-2xl font-extrabold"
            sx={(theme) => ({
              color: '#228BE6',
            })}
          >
            個人開発者のための技術記事
            <br />
            データベース
          </Title>
        </Center>
      </div>
    </div>
  );
};

type MainLayoutProps = {
  children: ReactNode;
};

const HomeLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Head />
      <HeaderAction {...{ tabs }} />
      <HeroContents />
      <Container className="pt-5 pb-10">
        <Stack spacing="xl">{children}</Stack>
      </Container>
      <FooterLinks {...{ data }} />
    </>
  );
};

export default HomeLayout;
