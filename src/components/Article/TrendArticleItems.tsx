/* eslint-disable tailwindcss/no-custom-classname */
import {
  Anchor,
  Button,
  Card,
  createStyles,
  Group,
  SimpleGrid,
  Text,
} from '@mantine/core';
import React from 'react';

import { useMediaQuery } from '../../lib/mantine/useMediaQuery';
import ArticleDetail from './ArticleDetail';
import ArticleItem from './ArticleItem';

const articleItem = {
  image:
    'https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
  categories: ['Rails', 'まとめ', 'AWS', 'React'],
  title: 'ChatGPTはどのように学習を行なっているのか',
  date: '1日前',
  media: 'zenn.dev',
};

const useStyles = createStyles((theme) => ({
  title: {
    // fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
  },

  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // textAlign: 'center',
    borderRadius: theme.radius.md,
    // height: 90,
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    transition: 'box-shadow 150ms ease, transform 100ms ease',

    '&:hover': {
      boxShadow: `${theme.shadows.md} !important`,
      transform: 'scale(1.05)',
    },
  },
}));

const TrendArticleItems = () => {
  const { classes } = useStyles();
  const largerThanXs = useMediaQuery('xs');
  const largerThanSm = useMediaQuery('sm');
  const largerThanMd = useMediaQuery('md');
  const largerThanLg = useMediaQuery('lg');
  const largerThanXl = useMediaQuery('xl');

  // const popularItems = popularMockdata.map((item) => (
  //   <UnstyledButton key={item.title} className={classes.item}>
  //     <item.icon />
  //     <Text size="xs" mt={7}>
  //       {item.title}
  //     </Text>
  //   </UnstyledButton>
  // ));

  return (
    <Card radius="md">
      <Group position="apart">
        <Text className="font-bold">急上昇中の記事</Text>
        <Anchor size="sm" sx={{ lineHeight: 1 }}>
          すべての記事を見る
        </Anchor>
      </Group>
      {largerThanSm ? (
        <SimpleGrid mt="md" className="grid-cols-2">
          <ArticleDetail {...articleItem} />
          <ArticleDetail {...articleItem} />
          <ArticleItem {...articleItem} />
          <ArticleItem {...articleItem} />
          <ArticleItem {...articleItem} />
          <ArticleItem {...articleItem} />
          <ArticleItem {...articleItem} />
          <ArticleItem {...articleItem} />
        </SimpleGrid>
      ) : (
        <SimpleGrid my="md" className="mx-auto grid-cols-1 place-items-center">
          <ArticleItem {...articleItem} />
          <ArticleItem {...articleItem} />
          <ArticleItem {...articleItem} />
          <ArticleItem {...articleItem} />
          <ArticleItem {...articleItem} />
          <ArticleItem {...articleItem} />
          <ArticleItem {...articleItem} />
          <ArticleItem {...articleItem} />
        </SimpleGrid>
      )}
      <Card className="flex items-center justify-center">
        <Button>すべての記事を見る</Button>
      </Card>
    </Card>
  );
};

export default TrendArticleItems;
