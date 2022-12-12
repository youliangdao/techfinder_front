import './lib/tailwind.css';

import { MantineProvider, Space } from '@mantine/core';
import React from 'react';

import ArticleDetail from './components/Articles/ArticleDetail';
import ArticleItem from './components/Articles/ArticleItem';
import ArticleItemsGenreHeader from './components/Articles/ArticleItemsGenreHeader';
import CategoryItemsList from './components/Category/CategoryItemsList';
import FooterLinks from './components/Footer';
import HeaderAction from './components/Header';
import HomeContentsHeader from './components/Home/HomeContentsHeader';
import SearchInput from './components/SearchInput';

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
const genres = ['すべての記事', '人気記事'];

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <HeaderAction {...{ links, isLogin }} />
      <FooterLinks {...{ data }} />
      <SearchInput />
      <HomeContentsHeader
        leftTitle="人気のカテゴリ"
        rightTitle="すべてのカテゴリを見る"
      />
      <ArticleItemsGenreHeader {...{ genres }} />
      <ArticleItem {...articleItem} />
      <Space h="md" />
      <ArticleDetail {...articleItem} />
      <Space h="md" />
      <CategoryItemsList />
    </MantineProvider>
  );
};

export default App;
