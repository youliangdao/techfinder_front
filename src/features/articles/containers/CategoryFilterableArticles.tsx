import { Space, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import CategoryArticleLists from 'articles/components/CategoryArticleLists';
import { useQueryCategoryArticles } from 'articles/hooks/useQueryCategoryArticles';
import { useQueryCategory } from 'categories/hooks/useQueyCategory';
import NotFoundTitle from 'components/NotFoundTitle';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import CategoryArticlesHeader from '../components/CategoryArticlesHeader';

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

const CategoryFilterableArticles = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  const { articleItems, status, params } = useQueryCategoryArticles();
  const fetchCategory = useQueryCategory();

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
              navigate(
                `/categories/${params.categoryName}/${params.tab}/search?q=${inputRef.current?.value}`
              );
            } else {
              navigate(`/categories/${params.categoryName}/${params.tab}`);
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
          articleItems={articleItems ? articleItems : []}
          isLoading={status === 'loading' || fetchCategory.status === 'loading'}
        />
      </>
    );
  }
  return <NotFoundTitle />;
};

export default CategoryFilterableArticles;
