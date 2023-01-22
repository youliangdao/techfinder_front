import {
  Container,
  createStyles,
  Group,
  Image,
  Text,
  Title,
} from '@mantine/core';
import image1 from 'assets/about1.svg';
import image2 from 'assets/about2.svg';
import { useMediaQuery } from 'lib/mantine/useMediaQuery';
import React from 'react';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('sm')]: {},
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image1: {
    flex: 1,

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor: theme.fn.variant({
      variant: 'light',
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: '4px 12px',
  },
}));

const About = () => {
  const largerThanSm = useMediaQuery('sm');
  return (
    <div className="py-10">
      <Container>
        {largerThanSm ? (
          <>
            <div className="flex justify-between pb-24">
              <div className="mx-auto max-w-sm md:mr-10 md:max-w-md">
                <Title className="mb-10 text-xl sm:text-2xl">
                  TechFinderは、個人開発に関する技術記事を集めた
                  データベースサービスです。
                </Title>
                <Text className="mb-3 leading-relaxed max-sm:text-sm">
                  個人開発やPF作りを始める時にこんなことを思った経験はありませんか？
                </Text>
                <Text className="mb-2 font-bold leading-relaxed max-sm:text-sm">
                  「役立ちそうな資料は色々見つかったけど、結局どれを参考にすればいいのかわからない...」
                </Text>
                <Text className="mb-3 font-bold leading-relaxed max-sm:text-sm">
                  「あの技術を使用した記事を見つけたいけど、検索結果がヒットせずなかなか見つからない...」
                </Text>
                <Text className="leading-relaxed max-sm:text-sm">
                  TechFinderはそういった個人開発者のよくある悩みを解決するためのサービスです。このサイトを参考にするだけで開発者は自分に合った技術情報を簡単に検索し、ブックマークして保存することができます。
                </Text>
              </div>
              <Image src={image1} className="flex-1 max-sm:hidden" />
            </div>
            <div className="flex justify-between">
              <Image src={image2} className="flex-1 max-sm:hidden" />
              <div className="mx-auto max-w-sm md:mr-10 md:max-w-md">
                <Title className="mb-10 text-xl sm:text-2xl">
                  お好きなカテゴリから記事を検索することができます。
                </Title>
                <Text className="mb-3 leading-relaxed max-sm:text-sm">
                  TechFinderは個人開発に役立つ技術記事をカテゴリ別に分類して収録してあるため、言語やフレームワーク、ライブラリなどから自分に合った記事を簡単に検索することができます。
                </Text>
                <Text className="mb-3 leading-relaxed max-sm:text-sm">
                  例えば、Reactを使って開発を進めたい場合、「React」でカテゴリを絞り込めば記事を探しやすくなるでしょう。
                </Text>
                <Text className="mb-4 leading-relaxed max-sm:text-sm">
                  また各技術に関する最新情報も随時更新しているため、開発者はトレンド技術を簡単にキャッチアップすることができます。
                </Text>
                <Text className="leading-relaxed max-sm:text-sm">
                  このように、TechFinderは個人開発に携わる全てのエンジニアが快適に開発を行えるようサポートしていきます。
                </Text>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="pb-20">
              <div className="mx-auto max-w-sm md:mr-10 md:max-w-md">
                <Title className="mb-10 text-xl sm:text-2xl">
                  TechFinderは、個人開発に関する技術記事を集めた
                  データベースサービスです。
                </Title>
                <Text className="mb-3 leading-relaxed max-sm:text-sm">
                  個人開発やPF作りを始める時にこんなことを思った経験はありませんか？
                </Text>
                <Text className="mb-2 font-bold leading-relaxed max-sm:text-sm">
                  「役立ちそうな資料は色々見つかったけど、結局どれを参考にすればいいのかわからない...」
                </Text>
                <Text className="mb-3 font-bold leading-relaxed max-sm:text-sm">
                  「あの技術を使用した記事を見つけたいけど、検索結果がヒットせずなかなか見つからない...」
                </Text>
                <Text className="leading-relaxed max-sm:text-sm">
                  TechFinderはそういった個人開発者のよくある悩みを解決するためのサービスです。この技術記事サイトをチェックするだけで、開発者は自分に合った技術情報を簡単に検索し、ブックマークして保存することができます。
                </Text>
              </div>
              <Group position="center">
                <Image src={image1} width={380} fit="contain" />
              </Group>
            </div>
            <div>
              <div className="mx-auto max-w-sm md:mr-10 md:max-w-md">
                <Title className="mb-10 text-xl sm:text-2xl">
                  お好きなカテゴリから記事を検索することができます。
                </Title>
                <Text className="mb-3 leading-relaxed max-sm:text-sm">
                  TechFinderは個人開発に役立つ技術記事をカテゴリ別に分類して収録してあるため、言語やフレームワーク、ライブラリなどから自分に合った記事を簡単に検索することができます。
                </Text>
                <Text className="mb-3 leading-relaxed max-sm:text-sm">
                  例えば、Reactを使って開発を進めたい場合、「React」でカテゴリを絞り込めば記事を探しやすくなるでしょう。
                </Text>
                <Text className="mb-4 leading-relaxed max-sm:text-sm">
                  また各技術に関する最新情報も随時更新しているため、開発者はトレンド技術を簡単にキャッチアップすることができます。
                </Text>
                <Text className="leading-relaxed max-sm:text-sm">
                  このように、TechFinderは個人開発に携わる全てのエンジニアが快適に開発を行えるようサポートしていきます。
                </Text>
              </div>
              <Group position="center">
                <Image src={image2} width={380} fit="contain" />
              </Group>
            </div>
          </>
        )}
      </Container>
    </div>
  );
};

export default About;
