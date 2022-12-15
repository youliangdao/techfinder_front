import './lib/tailwind.css';

import { MantineProvider } from '@mantine/core';
import React from 'react';

import HomeContents from './components/Home/HomeContents';

const genres = ['すべての記事', '人気記事'];

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <HomeContents />
      {/* <SearchInput />
      <HomeContentsHeader
        leftTitle="人気のカテゴリ"
        rightTitle="すべてのカテゴリを見る"
      />
      <ArticleItemsGenreHeader {...{ genres }} />
      <ArticleItem {...articleItem} />
      <Space h="md" />
      <ArticleDetail {...articleItem} />
      <Space h="md" />
      <CategoryItemsList /> */}
    </MantineProvider>
  );
};

export default App;
