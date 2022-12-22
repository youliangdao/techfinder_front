import TrendArticleLists from 'articles/components/TrendArticleLists';
import { Article } from 'articles/types';
import axios, { AxiosResponse } from 'axios';
import { endpoint } from 'config';
import React, { useEffect, useState } from 'react';

const TrendArticles = () => {
  const [articleItems, setArticleItems] = useState<Article[]>([]);
  useEffect(() => {
    const fetchArticles = async () => {
      const res: AxiosResponse<Article[]> = await axios.get(
        `${endpoint}/articles/rising`
      );
      return res.data;
    };
    fetchArticles().then((data) => setArticleItems(data));
  }, []);
  return <TrendArticleLists articleItems={articleItems} />;
};

export default TrendArticles;
