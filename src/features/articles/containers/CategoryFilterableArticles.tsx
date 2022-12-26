import { Space } from '@mantine/core';
import CategoryArticleLists from 'articles/components/CategoryArticleLists';
import { Article } from 'articles/types';
import axios, { AxiosResponse } from 'axios';
import { Category } from 'categories/types';
import { endpoint } from 'config';
import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import SearchInput from '../../../components/SearchInput';
import CategoryArticlesHeader from '../components/CategoryArticlesHeader';

const CategoryFilterableArticles = () => {
  const [filterInput, setFilterInput] = useState<string>('');
  const [articleItems, setArticleItems] = useState<Article[]>([]);
  const [category, setCategory] = useState<Pick<Category, 'title' | 'image'>>({
    title: '',
    image: '',
  });
  const { categoryName } = useParams();
  const [searchParams] = useSearchParams();
  const articleGenre = searchParams.get('tab');

  useEffect(() => {
    const fetchArticles = async () => {
      const res: AxiosResponse<Article[]> = await axios.get(
        `${endpoint}/categories/${categoryName}?tab=${articleGenre}`
      );
      return res.data;
    };
    const fetchCategory = async () => {
      const res: AxiosResponse<Category> = await axios.get(
        `${endpoint}/category?category=${categoryName}`
      );

      return res.data;
    };
    fetchArticles().then((data) => setArticleItems(data));
    fetchCategory().then((data) =>
      setCategory({
        title: data.title,
        image: data.image,
      })
    );
  }, [categoryName, articleGenre]);

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
