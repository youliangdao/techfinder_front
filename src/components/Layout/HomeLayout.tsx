import React, { FC, ReactElement } from 'react';

import FooterLinks from '../Footer';
import HeaderAction from '../Header';

const links = [
  {
    link: '/pricing',
    label: 'About',
  },
  {
    link: '#2',
    label: 'Search',
    links: [
      {
        link: '/faq',
        label: 'カテゴリから探す',
      },
      {
        link: '/demo',
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

const articleItem = {
  image:
    'https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
  categories: ['Rails', 'まとめ', 'AWS', 'React'],
  title: 'ChatGPTはどのように学習を行なっているのか',
  date: '1日前',
  media: 'zenn.dev',
};

const isLogin = true;

type MainLayoutProps = {
  children: ReactElement;
};

const HomeLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <HeaderAction {...{ links, isLogin }} />
      {children}
      <FooterLinks {...{ data }} />
    </>
  );
};

export default HomeLayout;
