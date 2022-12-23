import { Space } from '@mantine/core';
import CategoryArticleLists from 'articles/components/CategoryArticleLists';
import React, { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import SearchInput from '../../../components/SearchInput';
import CategoryArticlesHeader from '../components/CategoryArticlesHeader';

const CategoryFilterableArticles = () => {
  const [filterInput, setFilterInput] = useState<string>('');
  // const [articleItems, setArticleItems] = useState<Article[]>([]);
  // const [category, setCategory] = useState<Pick<Category, 'title' | 'image'>>({
  //   title: '',
  //   image: '',
  // });
  const { categoryName } = useParams();
  const [searchParams] = useSearchParams();
  const articleGenre = searchParams.get('tab');

  // useEffect(() => {
  //   const fetchArticles = async () => {
  //     const res: AxiosResponse<Article[]> = await axios.get(
  //       `${endpoint}/categories/${categoryName}?tab=${articleGenre}`
  //     );
  //     return res.data;
  //   };
  //   const fetchCategory = async () => {
  //     const res: AxiosResponse<Category> = await axios.get(
  //       `${endpoint}/category?category=${categoryName}`
  //     );

  //     return res.data;
  //   };
  //   fetchArticles().then((data) => setArticleItems(data));
  //   fetchCategory().then((data) =>
  //     setCategory({
  //       title: data.title,
  //       image: data.image,
  //     })
  //   );
  // }, [categoryName, articleGenre]);

  const category = {
    title: 'Ruby on Rails',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg',
  };

  const articleItems = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      categories: [
        {
          title: 'Rails',
          path: 'rails',
        },
        {
          title: 'Vue',
          path: 'vue',
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
      id: 2,
      image:
        'https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      categories: [
        {
          title: 'Rails',
          path: 'rails',
        },
        {
          title: 'Vue',
          path: 'vue',
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
      id: 3,
      image:
        'https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      categories: [
        {
          title: 'Rails',
          path: 'rails',
        },
        {
          title: 'Vue',
          path: 'vue',
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
      id: 4,
      image:
        'https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      categories: [
        {
          title: 'Vue',
          path: 'vue',
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
      id: 5,
      image:
        'https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      categories: [
        {
          title: 'Rails',
          path: 'rails',
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
  return (
    <>
      <CategoryArticlesHeader {...category} />
      <Space h="lg" />
      <SearchInput {...{ filterInput, setFilterInput }} />
      <Space h="lg" />
      <CategoryArticleLists
        leftGenre="すべての記事"
        rightGenre="人気記事"
        articleItems={articleItems}
      />
    </>
  );
};

export default CategoryFilterableArticles;
