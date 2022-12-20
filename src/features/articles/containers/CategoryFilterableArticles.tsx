import { Space } from '@mantine/core';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { ReactComponent as RailsSVG } from '/src/assets/rubyonrails.svg';

import SearchInput from '../../../components/SearchInput';
import ArticleLists from '../components/ArticleLists';
import CategoryArticlesHeader from '../components/CategoryArticlesHeader';

const articleItems = [
  {
    image:
      'https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    categories: [
      {
        title: 'Rails',
        path: 'rails',
      },
      {
        title: 'まとめ',
        path: 'まとめ',
      },
      {
        title: 'AWS',
        path: 'aws',
      },
      {
        title: 'React',
        path: 'react',
      },
    ],
    title: 'ChatGPTはどのように学習を行なっているのか',
    date: '1日前',
    media: 'zenn.dev',
  },
  {
    image:
      'https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    categories: [
      {
        title: 'Rails',
        path: 'rails',
      },
      {
        title: 'まとめ',
        path: 'まとめ',
      },
      {
        title: 'AWS',
        path: 'aws',
      },
      {
        title: 'React',
        path: 'react',
      },
    ],
    title: 'ChatGPTはどのように学習を行なっているのか',
    date: '1日前',
    media: 'zenn.dev',
  },
  {
    image:
      'https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    categories: [
      {
        title: 'Rails',
        path: 'rails',
      },
      {
        title: 'まとめ',
        path: 'まとめ',
      },
      {
        title: 'AWS',
        path: 'aws',
      },
      {
        title: 'React',
        path: 'react',
      },
    ],
    title: 'ChatGPTはどのように学習を行なっているのか',
    date: '1日前',
    media: 'zenn.dev',
  },
  {
    image:
      'https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    categories: [
      {
        title: 'Rails',
        path: 'rails',
      },
      {
        title: 'まとめ',
        path: 'まとめ',
      },
      {
        title: 'AWS',
        path: 'aws',
      },
      {
        title: 'React',
        path: 'react',
      },
    ],
    title: 'ChatGPTはどのように学習を行なっているのか',
    date: '1日前',
    media: 'zenn.dev',
  },
  {
    image:
      'https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    categories: [
      {
        title: 'Rails',
        path: 'rails',
      },
      {
        title: 'まとめ',
        path: 'まとめ',
      },
      {
        title: 'AWS',
        path: 'aws',
      },
      {
        title: 'React',
        path: 'react',
      },
    ],
    title: 'ChatGPTはどのように学習を行なっているのか',
    date: '1日前',
    media: 'zenn.dev',
  },
  {
    image:
      'https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    categories: [
      {
        title: 'Rails',
        path: 'rails',
      },
      {
        title: 'まとめ',
        path: 'まとめ',
      },
      {
        title: 'AWS',
        path: 'aws',
      },
      {
        title: 'React',
        path: 'react',
      },
    ],
    title: 'ChatGPTはどのように学習を行なっているのか',
    date: '1日前',
    media: 'zenn.dev',
  },
];

const CategoryFilterableArticles = () => {
  const [filterInput, setFilterInput] = useState<string>('');
  const { categoryName } = useParams();
  console.log(categoryName);

  return (
    <>
      <CategoryArticlesHeader category="Ruby on Rails" Icon={RailsSVG} />
      <Space h="lg" />
      <SearchInput {...{ filterInput, setFilterInput }} />
      <Space h="lg" />
      <ArticleLists
        leftGenre="すべての記事"
        rightGenre="人気記事"
        articleItems={articleItems}
      />
    </>
  );
};

export default CategoryFilterableArticles;
