import { Space, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import CategoryArticleLists from 'articles/components/CategoryArticleLists';
import { Article, ResponseArticleType } from 'articles/types';
import axios from 'axios';
import { CategoryType } from 'categories/types';
import NotFoundTitle from 'components/NotFoundTitle';
import { endpoint } from 'config';
import { formatDistanceToNow } from 'date-fns';
import { ja } from 'date-fns/locale';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { setCategory } from 'store/ducks/categorySlice';
import { useAppDispatch } from 'store/hooks';

import CategoryArticlesHeader from '../components/CategoryArticlesHeader';

const CategoryFilterableArticles = () => {
  const [filterInput, setFilterInput] = useState<string>('');
  const [articleItems, setArticleItems] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const params = useParams();

  const categoryTable = [
    'ui',
    'design',
    'react',
    'github',
    'javascript',
    'rails',
    'aws',
    'docker',
    'terraform',
    'nuxtjs',
    'game',
    'まとめ',
    'vue',
    'netlify',
    'gatsby',
    'graphql',
    'php',
    'flutter',
    'heroku',
    'nestjs',
    'python',
    'スタートアップ',
    'ruby',
    'bot',
    'googlemapsapi',
    'gas',
    'ポエム',
    'nextjs',
    'vercel',
    'chrome',
    'svg',
    'typescript',
    'django',
    'gcp',
    'laravel',
    '機械学習',
    'firebase',
    'nodejs',
    '英語',
    '失敗談',
    'swift',
    'アイデア',
    'csharp',
    'azure',
    'jquery',
    'unity',
    'marketing',
    'pwa',
    'circleci',
    'twitter',
    'css',
    'amplify',
    'fargate',
    'ecs',
    'nocode',
    'android',
    'springboot',
    'mysql',
    'ios',
    'firestore',
    'go',
    'threejs',
    'stripe',
    'others',
    'linebot',
    'supabase',
    'cloudflare',
    'rust',
    'wasm',
    'auth0',
    'prisma',
    'svelte',
    'html',
    'slack',
  ];

  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsLoading(true);
    const fetchArticles = async () => {
      const res = await axios.get<ResponseArticleType>(
        `${endpoint}/${params.categoryName}/articles?tab=${params.tab}`
      );
      return res.data;
    };
    const fetchCategory = async () => {
      const res = await axios.get<{ data: CategoryType }>(
        `${endpoint}/categories/${params.categoryName}`
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
            name: article.attributes.media_name,
            image: article.attributes.media_image,
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
  }, [params.categoryName, params.tab, dispatch]);

  const categoryFlag = categoryTable.includes(params.categoryName || '');
  const tabFlag = params.tab === 'all' || params.tab === 'popular';
  if (categoryFlag && tabFlag) {
    return (
      <>
        <CategoryArticlesHeader />
        <Space h="lg" />
        <form
          onSubmit={(e) => {
            e.preventDefault();
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
        <CategoryArticleLists
          leftGenre="すべての記事"
          rightGenre="人気記事"
          articleItems={articleItems}
          isLoading={isLoading}
          filterInput={filterInput}
        />
      </>
    );
  }
  return <NotFoundTitle />;
};

export default CategoryFilterableArticles;
