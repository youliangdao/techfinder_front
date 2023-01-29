/* eslint-disable react/no-unescaped-entities */
import {
  Button,
  Container,
  createStyles,
  Group,
  Overlay,
  Space,
  Text,
  Title,
} from '@mantine/core';
import { categoryTable } from 'config';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: 100,
    paddingBottom: 80,
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    '@media (max-width: 520px)': {
      paddingTop: 50,
      paddingBottom: 30,
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },

  title: {
    fontWeight: 800,
    fontSize: 32,
    letterSpacing: -1,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginBottom: theme.spacing.xs,
    textAlign: 'center',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    '@media (max-width: 520px)': {
      fontSize: 25,
      textAlign: 'left',
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][4],
  },

  description: {
    color: theme.colors.gray[0],
    textAlign: 'center',

    '@media (max-width: 520px)': {
      fontSize: theme.fontSizes.sm,
      textAlign: 'left',
    },
  },
}));

const genreTable = new Map([
  ['beginner', '個人開発の基本'],
  ['idea', 'アイデア'],
  ['design', 'デザイン'],
  ['architecture', 'インフラ・アーキテクチャ'],
  ['backend', 'バックエンド'],
  ['frontend', 'フロントエンド '],
  ['release', 'リリース・運用'],
]);

const GenreArticlesHeader = () => {
  const { classes, cx } = useStyles();

  const params = useParams();
  const navigate = useNavigate();

  let message = '';
  let genreCategories: string[] = [];
  let background = '';
  const genreTitle = params.genre && genreTable.get(params.genre);

  switch (params.genre) {
    case 'beginner':
      background = '/src/assets/background-beginner.jpg';
      message =
        '個人開発が初めての人はまずはここからチェックしましょう。個人開発の全体像や注意すべき点などについて学ぶことができます。';
      break;
    case 'idea':
      background = '/src/assets/background-idea.jpg';
      genreCategories = ['アイデア', 'まとめ', 'ポエム'];

      message =
        '「アイデアが浮かばない...」そんな人はこちらの記事を参考にしましょう。個人開発で使えそうなアイデアが網羅的にまとまっています。';
      break;
    case 'design':
      genreCategories = ['ui', 'design'];
      background = '/src/assets/background-design.jpg';
      message =
        'アプリのデザインやレイアウトにお困りの人はこちらの記事をチェックしましょう。個人開発に役立つデザインサイトやツールがまとまっています。';
      break;
    case 'architecture':
      background = '/src/assets/background-architecture.jpg';
      genreCategories = [
        'aws',
        'gcp',
        'azure',
        'docker',
        'circleci',
        'heroku',
        'firebase',
        'supabase',
        'vercel',
        'netlify',
        'ecs',
        'fargate',
        'amplify',
        'cloudflare',
      ];
      message =
        'インフラや技術選定に困ったらこちらの記事をチェックしましょう。個人開発におけるインフラや技術選定のポイントがまとまっています。';
      break;
    case 'backend':
      background = '/src/assets/background-programming.jpg';
      genreCategories = [
        'rails',
        'laravel',
        'django',
        'nestjs',
        'springboot',
        'ruby',
        'php',
        'python',
        'go',
        'nodejs',
        'mysql',
        'firestore',
      ];
      message =
        'バックエンド側の構成や設計に困ったらこちらの記事をチェックしてみましょう。よく使用される技術スタックや実装例が紹介されています。';
      break;
    case 'frontend':
      background = '/src/assets/background-programming.jpg';
      genreCategories = [
        'javascript',
        'typescript',
        'react',
        'vue',
        'nextjs',
        'gatsby',
        'nuxtjs',
        'svelte',
        'html',
        'css',
      ];
      message =
        'フロントエンド側の構成や設計に困ったらこちらの記事はチェックしてみましょう。よく使用される技術スタックや実装例が紹介されています。';
      break;
    case 'release':
      background = '/src/assets/background-release.jpg';
      message =
        'リリースや運用に困ったらこちらの記事をチェックしてみましょう。アプリを実際にリリースし、運用していく上での注意点などがまとまっています。';
      break;
    default:
      break;
  }

  return (
    // eslint-disable-next-line tailwindcss/no-contradicting-classname
    <div
      style={{ backgroundImage: `url(${background})` }}
      className={classes.wrapper}
    >
      <Overlay color="black" opacity={0.65} zIndex={1} />
      <div className={classes.inner}>
        <Title className={classes.title}>
          <Text component="span" inherit className={classes.highlight}>
            "{genreTitle}"
          </Text>
          に関する記事
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            {message}
          </Text>
          <Space h={30} />
          {genreCategories.length !== 0 && (
            <>
              {/* <Text size="lg" className={classes.description}>
                関連するカテゴリ
              </Text>
              <Space h={10} /> */}
              <Group className="justify-center max-[520px]:justify-start max-[520px]:space-x-0">
                {genreCategories.map((path) => (
                  <Button
                    key={path}
                    onClick={() => navigate(`/categories/${path}/all`)}
                    className="font-bold"
                    radius="xl"
                    compact
                  >
                    {'#' + categoryTable.get(path)}
                  </Button>
                ))}
              </Group>
            </>
          )}
        </Container>
      </div>
    </div>
  );
};

// const GenreArticlesHeader = () => {

//   return (
//     <div className="xs:px-3 flex items-center justify-center space-x-10 py-10 sm:justify-start sm:px-5">
//       <div className="flex h-20 items-center justify-center sm:h-24">
//         {params.genre === 'beginner' ? (
//           <Image
//             src="https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/12eb90e751ce5d999b813d4721c068151a0e0fee/large.jpg?1568603229"
//             fit="contain"
//             width={120}
//           />
//         ) : params.genre === 'idea' ? (
//           <IconBulb size={120} />
//         ) : params.genre === 'design' ? (
//           <Image
//             src="https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/e5d69a9fefbde3224f11d5c6eb8fb830ce44e8bd/large.jpg?1587800638"
//             fit="contain"
//             width={120}
//           />
//         ) : params.genre === 'architecture' ? (
//           <IconBuildingArch size={120} />
//         ) : params.genre === 'backend' ? (
//           <Image
//             src="https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/7963415944a065f9b76207d292a279ca50be253d/large.jpg?1511773201"
//             fit="contain"
//             width={120}
//           />
//         ) : params.genre === 'frontend' ? (
//           <Image
//             src="https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/62bf8b7c62bc2b8c15d0bdc22ca83e2dae9a6de4/large.jpg?1664760943"
//             fit="contain"
//             width={120}
//           />
//         ) : params.genre === 'release' ? (
//           <IconBrandGoogleAnalytics size={120} />
//         ) : (
//           <Skeleton circle height={60} />
//         )}
//       </div>
//       <div>
//         <Title className="text-3xl font-bold">
//           "{genreTitle}"に関する記事一覧
//         </Title>
//         <Space h="lg" />
//         <GenreArticleText />
//         {genreCategories.length !== 0 && (
//           <>
//             <Space h={30} />
//             <Text className="font-bold">関連するカテゴリ：</Text>
//             <Group spacing="sm">
//               {genreCategories.map((path) => (
//                 <Anchor
//                   key={path}
//                   underline
//                   onClick={() => navigate(`/categories/${path}/all`)}
//                 >
//                   {'#' + categoryTable.get(path)}
//                 </Anchor>
//               ))}
//             </Group>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

export default GenreArticlesHeader;
