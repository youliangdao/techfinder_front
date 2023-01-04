import { Space, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import ArticleLists from 'articles/components/ArticleLists';
import { Article, ResponseArticleType } from 'articles/types';
import axios from 'axios';
import { CategoryType } from 'categories/types';
import { endpoint } from 'config';
import { formatDistanceToNow } from 'date-fns';
import { ja } from 'date-fns/locale';
import React, { useEffect, useRef, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { selectCategory, setCategory } from 'store/ducks/categorySlice';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import CategoryArticlesHeader from '../components/CategoryArticlesHeader';

const CategoryFilterableArticles = () => {
  const [filterInput, setFilterInput] = useState<string>('');
  const [articleItems, setArticleItems] = useState<Article[]>([]);
  const { categoryName } = useParams();
  const [searchParams] = useSearchParams();
  const articleGenre = searchParams.get('tab');
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const inputRef = useRef<HTMLInputElement>(null);

  const category = useAppSelector(selectCategory);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setFilterInput('');
    setIsLoading(true);
    const fetchArticles = async () => {
      const res = await axios.get<ResponseArticleType>(
        `${endpoint}/${categoryName}/articles?tab=${articleGenre}`
      );
      return res.data;
    };
    const fetchCategory = async () => {
      const res = await axios.get<{ data: CategoryType }>(
        `${endpoint}/categories/${categoryName}`
      );

      return res.data.data;
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

    fetchCategory().then((data) => {
      dispatch(
        setCategory({
          id: data.id,
          title: data.attributes.name,
          image: data.attributes.image,
          path: data.attributes.path,
        })
      );
    });
  }, [categoryName, articleGenre, dispatch]);

  return (
    <>
      <CategoryArticlesHeader {...category} />
      <Space h="lg" />
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
      <Space h="lg" />
      <ArticleLists
        leftGenre="すべての記事"
        rightGenre="人気記事"
        articleItems={articleItems}
        isLoading={isLoading}
        filterInput={filterInput}
        page={page}
        setPage={setPage}
      />
    </>
  );
};

export default CategoryFilterableArticles;
