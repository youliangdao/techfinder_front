import { Space, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import CategoryArticleLists from 'articles/components/CategoryArticleLists';
import { useQueryCategoryArticles } from 'articles/hooks/useQueryCategoryArticles';
import { useQueryCategory } from 'categories/hooks/useQueyCategory';
import { Head } from 'components/Head/Head';
import NotFoundTitle from 'components/NotFoundTitle';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import CategoryArticlesHeader from '../components/CategoryArticlesHeader';

// const categoryTable = [
//   'ui',
//   'design',
//   'react',
//   'github',
//   'javascript',
//   'rails',
//   'aws',
//   'docker',
//   'terraform',
//   'nuxtjs',
//   'game',
//   'まとめ',
//   'vue',
//   'netlify',
//   'gatsby',
//   'graphql',
//   'php',
//   'flutter',
//   'heroku',
//   'nestjs',
//   'python',
//   'スタートアップ',
//   'ruby',
//   'bot',
//   'googlemapsapi',
//   'gas',
//   'ポエム',
//   'nextjs',
//   'vercel',
//   'chrome',
//   'svg',
//   'typescript',
//   'django',
//   'gcp',
//   'laravel',
//   '機械学習',
//   'firebase',
//   'nodejs',
//   '英語',
//   '失敗談',
//   'swift',
//   'アイデア',
//   'csharp',
//   'azure',
//   'jquery',
//   'unity',
//   'marketing',
//   'pwa',
//   'circleci',
//   'twitter',
//   'css',
//   'amplify',
//   'fargate',
//   'ecs',
//   'nocode',
//   'android',
//   'springboot',
//   'mysql',
//   'ios',
//   'firestore',
//   'go',
//   'threejs',
//   'stripe',
//   'others',
//   'line',
//   'supabase',
//   'cloudflare',
//   'rust',
//   'wasm',
//   'auth0',
//   'prisma',
//   'svelte',
//   'html',
//   'slack',
// ];

const categoryTable = new Map([
  ['ui', 'UI'],
  ['design', 'デザイン（Design）'],
  ['react', 'React'],
  ['github', 'GitHub'],
  ['javascript', 'JavaScript'],
  ['rails', 'Rails'],
  ['aws', 'AWS'],
  ['docker', 'Docker'],
  ['terraform', 'Terraform'],
  ['nuxtjs', 'Nuxt.js'],
  ['game', 'ゲーム'],
  ['まとめ', 'まとめ'],
  ['vue', 'Vue.js'],
  ['netlify', 'Netlify'],
  ['gatsby', 'Gatsby'],
  ['graphql', 'GraphQL'],
  ['php', 'PHP'],
  ['flutter', 'Flutter'],
  ['heroku', 'Heroku'],
  ['nestjs', 'NestJS'],
  ['python', 'Python'],
  ['スタートアップ', 'スタートアップ'],
  ['ruby', 'Ruby'],
  ['bot', 'bot'],
  ['googlemapsapi', 'GoogleMapsAPI'],
  ['gas', 'GAS'],
  ['ポエム', 'ポエム'],
  ['nextjs', 'Next.js'],
  ['vercel', 'Vercel'],
  ['chrome', 'Chrome拡張'],
  ['svg', 'SVG'],
  ['typescript', 'TypeScript'],
  ['django', 'Django'],
  ['gcp', 'GCP'],
  ['laravel', 'Laravel'],
  ['機械学習', '機械学習'],
  ['firebase', 'Firebase'],
  ['nodejs', 'Node.js'],
  ['英語', '英語'],
  ['失敗談', '失敗談'],
  ['swift', 'Swift'],
  ['アイデア', 'アイデア'],
  ['csharp', 'C#'],
  ['azure', 'Azure'],
  ['jquery', 'jQuery'],
  ['unity', 'Unity'],
  ['marketing', 'マーケティング'],
  ['pwa', 'PWA'],
  ['circleci', 'CircleCI'],
  ['twitter', 'Twitter'],
  ['css', 'CSS'],
  ['amplify', 'Amplify'],
  ['fargate', 'Fargate'],
  ['ecs', 'ECS'],
  ['nocode', 'ノーコード'],
  ['android', 'Android'],
  ['springboot', 'SpringBoot'],
  ['mysql', 'MySQL'],
  ['ios', 'iOS'],
  ['firestore', 'FireStore'],
  ['go', 'Go'],
  ['threejs', 'three.js'],
  ['stripe', 'Stripe'],
  ['others', 'その他'],
  ['line', 'LINE'],
  ['supabase', 'Supabase'],
  ['cloudflare', 'Cloudflare'],
  ['rust', 'Rust'],
  ['wasm', 'WebAssembly'],
  ['auth0', 'Auth0'],
  ['prisma', 'Prisma'],
  ['svelte', 'Svelte'],
  ['html', 'HTML'],
  ['slack', 'Slack'],
]);

const CategoryFilterableArticles = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  const { data, status, params } = useQueryCategoryArticles();
  const fetchCategory = useQueryCategory();

  const categoryFlag = Array.from(categoryTable.keys()).includes(
    params.categoryName || ''
  );
  const tabFlag = params.tab === 'all' || params.tab === 'popular';
  if (categoryFlag && tabFlag) {
    return (
      <>
        <Head
          title={`${categoryTable.get(
            params.categoryName || ''
          )}に関する記事一覧`}
        />
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
          articleItems={data ? data : []}
          isLoading={status === 'loading' || fetchCategory.status === 'loading'}
        />
      </>
    );
  }
  return <NotFoundTitle />;
};

export default CategoryFilterableArticles;
