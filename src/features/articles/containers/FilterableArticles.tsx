import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import { Article, ResponseArticleType } from 'articles/types';
import axios, { AxiosResponse } from 'axios';
import { endpoint } from 'config';
import { formatDistanceToNow } from 'date-fns';
import { ja } from 'date-fns/locale';
import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import ArticleLists from '../components/ArticleLists';

const FilterableArticles = () => {
  const [filterInput, setFilterInput] = useState<string>('');
  const [articleItems, setArticleItems] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const articleGenre = searchParams.get('tab') || '';
  const inputRef = useRef<HTMLInputElement>(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setFilterInput('');
    setIsLoading(true);
    const fetchArticles = async () => {
      const res: AxiosResponse<ResponseArticleType> = await axios.get(
        `${endpoint}/articles?tab=${articleGenre}`
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
        setIsLoading(false);
        alert('記事情報の取得に失敗しました');
      })
      .finally(() => setIsLoading(false));
  }, [articleGenre]);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setPage(1);
          if (inputRef.current?.value) {
            setFilterInput(inputRef.current.value);
          } else {
            setFilterInput('');
          }
        }}
      >
        <TextInput
          icon={<IconSearch size={18} stroke={1.5} />}
          radius="lg"
          size="sm"
          placeholder="キーワードを入力..."
          ref={inputRef}
        />
      </form>
      <br />
      <ArticleLists
        leftGenre="すべての記事"
        rightGenre="人気記事"
        articleItems={articleItems}
        filterInput={filterInput}
        isLoading={isLoading}
        page={page}
        setPage={setPage}
      />
    </>
  );
};

export default FilterableArticles;
