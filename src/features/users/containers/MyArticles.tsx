import React from 'react';
import UserArticleLists from 'users/components/UserArticleLists';

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

const MyArticles = () => {
  return (
    <>
      <UserArticleLists
        leftGenre="いいねした記事"
        rightGenre="ブックマークした記事"
        articleItems={articleItems}
      />
    </>
  );
};

export default MyArticles;
