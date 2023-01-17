/* eslint-disable react/no-unescaped-entities */
import { Image, Skeleton, Text } from '@mantine/core';
import { useQueryClient } from '@tanstack/react-query';
import { CategoryType } from 'categories/types';
import React from 'react';
import { useParams } from 'react-router-dom';

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
  ['linebot', 'LINEBot'],
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

const CategoryArticlesHeader = () => {
  const queryClient = useQueryClient();
  const params = useParams<{ categoryName: string; tab: 'all' | 'popular' }>();

  const category = queryClient.getQueryData<CategoryType>([
    'category',
    params.categoryName,
  ]);

  const categoryTitle =
    params.categoryName && categoryTable.get(params.categoryName);
  return (
    <div className="xs:px-3 flex items-center justify-center space-x-3 sm:justify-start sm:px-5">
      <div className="flex h-20 items-center justify-center sm:h-24">
        {category ? (
          <Image src={category.attributes.image} height={100} fit="contain" />
        ) : (
          <Skeleton circle height={60} />
        )}
      </div>
      <Text className="text-2xl font-bold">"{categoryTitle}"に関する記事</Text>
    </div>
  );
};

export default CategoryArticlesHeader;
