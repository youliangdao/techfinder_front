import TrendArticleLists from 'articles/components/TrendArticleLists';
import { Article, ResponseArticleType } from 'articles/types';
import axios from 'axios';
import { endpoint } from 'config';
import { formatDistanceToNow } from 'date-fns';
import { ja } from 'date-fns/locale';
import React, { useEffect, useState } from 'react';

const TrendArticles = () => {
  const [articleItems, setArticleItems] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const fetchArticles = async () => {
      const res = await axios.get<ResponseArticleType>(
        `${endpoint}/articles/rising`
      );
      return res.data;
    };
    fetchArticles()
      .then((data) => {
        setIsLoading(false);
        const newArticles = data.data.map((article) => ({
          id: article.id,
          title: article.attributes.title,
          date: formatDistanceToNow(new Date(article.attributes.date), {
            addSuffix: true,
            locale: ja,
          }),
          media: {
            name: data.meta.media.name,
            image: data.meta.media.image,
          },
          image: article.attributes.image,
          link: article.attributes.link,
          categories: article.relationships.categories.data.flatMap(
            (category) => {
              return data.included
                .filter((includedData) => {
                  return includedData.id === category.id;
                })
                .map((data) => ({
                  title: data.attributes.name,
                  path: data.attributes.path,
                }));
            }
          ),
        }));

        setArticleItems(newArticles);
      })
      .catch((error) => {
        alert('記事の取得に失敗しました');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return <TrendArticleLists {...{ articleItems, isLoading }} />;
};

export default TrendArticles;
