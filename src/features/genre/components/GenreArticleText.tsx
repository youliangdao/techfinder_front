import { Text } from '@mantine/core';
import React from 'react';
import { useParams } from 'react-router-dom';

const GenreArticleText = () => {
  const params = useParams();
  let message = '';

  switch (params.genre) {
    case 'beginner':
      message =
        '個人開発初めての人はまずはここからチェックしましょう。個人開発の流れや注意点などが学べます。';
      break;
    case 'idea':
      message =
        '「アイデアが浮かばない...」そんな人はこちらの記事を参考にしましょう。個人開発で使えそうなアイデアが網羅的にまとまっています。';
      break;
    case 'design':
      message =
        'アプリのデザインやレイアウトにお困りの人はこちらの記事をチェックしましょう。個人開発に役立つデザインサイトやツールがまとまっています。';
      break;
    case 'architecture':
      message =
        'インフラや技術選定に困ったらこちらの記事をチェックしましょう。個人開発におけるインフラや技術選定のポイントがまとまっています。';
      break;
    case 'backend':
      message =
        'バックエンド側の構成や設計に困ったらこちらの記事をチェックしてみましょう。よく使用される技術スタックや実装例が紹介されています。';
      break;
    case 'frontend':
      message =
        'フロントエンド側の構成や設計に困ったらこちらの記事はチェックしてみましょう。よく使用される技術スタックや実装例が紹介されています。';
      break;
    case 'release':
      message =
        'リリースや運用に困ったらこちらの記事をチェックしてみましょう。アプリを実際にリリースし、運用していく上での注意点などがまとまっています。';
      break;
    default:
      break;
  }

  return <Text>{message}</Text>;
};

export default GenreArticleText;
