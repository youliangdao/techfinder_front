import React, { useState } from 'react';

import SearchInput from '../../../components/SearchInput';
import ArticleLists from '../components/ArticleLists';

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

const FilterableArticles = () => {
  const [filterInput, setFilterInput] = useState<string>('');

  return (
    <>
      <SearchInput {...{ filterInput, setFilterInput }} />
      <br />
      <ArticleLists
        leftGenre="すべての記事"
        rightGenre="人気記事"
        articleItems={articleItems}
      />
    </>
  );
};

export default FilterableArticles;
