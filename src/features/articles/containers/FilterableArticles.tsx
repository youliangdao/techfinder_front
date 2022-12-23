import { Article } from 'articles/types';
import axios, { AxiosResponse } from 'axios';
import { endpoint } from 'config';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import SearchInput from '../../../components/SearchInput';
import ArticleLists from '../components/ArticleLists';

const FilterableArticles = () => {
  const [filterInput, setFilterInput] = useState<string>('');
  const [articleItems, setArticleItems] = useState<Article[]>([]);
  const [searchParams] = useSearchParams();
  const articleGenre = searchParams.get('tab');
  useEffect(() => {
    const fetchArticles = async () => {
      const res: AxiosResponse<Article[]> = await axios.get(
        `${endpoint}/articles?tab=${articleGenre}`
      );
      return res.data;
    };
    fetchArticles().then((data) => setArticleItems(data));
  }, [articleGenre]);

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
