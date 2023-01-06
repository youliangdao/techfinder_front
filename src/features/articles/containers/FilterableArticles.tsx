import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import { Article, ResponseArticleType } from 'articles/types';
import axios, { AxiosResponse } from 'axios';
import NotFoundTitle from 'components/NotFoundTitle';
import { endpoint } from 'config';
import { formatDistanceToNow } from 'date-fns';
import { ja } from 'date-fns/locale';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import ArticleLists from '../components/ArticleLists';

const FilterableArticles = () => {
  const [filterInput, setFilterInput] = useState<string>('');
  const [articleItems, setArticleItems] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchArticles = async () => {
      const res: AxiosResponse<ResponseArticleType> = await axios.get(
        `${endpoint}/articles?tab=${params.tab}`
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
  }, [params.tab]);

  if (params.tab === 'all' || params.tab === 'popular') {
    return (
      <>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (inputRef.current?.value) {
              setFilterInput(inputRef.current.value);
            } else {
              setFilterInput('');
            }
            navigate(`/articles/${params.tab}`);
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
        />
      </>
    );
  }
  return <NotFoundTitle />;
};

export default FilterableArticles;
