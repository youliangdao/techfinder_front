/* eslint-disable tailwindcss/no-custom-classname */
import { Container, Stack, Text, Title } from '@mantine/core';
import React, { FC, ReactNode } from 'react';
import { selectUser } from 'store/ducks/userSlice';
import { useAppSelector } from 'store/hooks';

import { ReactComponent as HeroSVG } from '/src/assets/hero.svg';

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

const HeroContents = () => {
  return (
    <div className="bg-m_gray-0">
      <Container>
        <div className="flex justify-between py-10">
          <HeroSVG className="h-28 sm:h-40" />
          <div className="mr-0 max-w-full max-sm:my-auto md:mr-16 md:max-w-md">
            <Title
              className="max-xs:text-xl text-2xl font-extrabold"
              style={{ color: '#228BE6' }}
            >
              個人開発者のための技術記事データベース
            </Title>
            <Text className="max-sm:hidden sm:mt-4">
              「アイデアが思い浮かばない」「どんな技術で開発すればいいのかわからない」
              <br />
              そんな個人開発者のよくある悩みをStackDeveloperは解決します。
            </Text>
          </div>
        </div>
      </Container>
    </div>
  );
};

type MainLayoutProps = {
  children: ReactNode;
};

const HomeLayout: FC<MainLayoutProps> = ({ children }) => {
  const user = useAppSelector(selectUser);
  const isLogin = !(user.uid === '');
  return (
    <>
      <HeaderAction {...{ links, isLogin }} />
      <HeroContents />
      <Container className="pt-5 pb-10">
        <Stack spacing="xl">{children}</Stack>
      </Container>
      <FooterLinks {...{ data }} />
    </>
  );
};

export default HomeLayout;
