/* eslint-disable tailwindcss/no-custom-classname */
import {
  Anchor,
  Card,
  createStyles,
  Group,
  SimpleGrid,
  Text,
} from '@mantine/core';
import React from 'react';

import ArticleDetail from '../../../components/Article/ArticleDetail';
import ArticleItem from '../../../components/Article/ArticleItem';
import { useMediaQuery } from '../../../lib/mantine/useMediaQuery';
import { ArticleListsProps } from '../types';

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

const TrendArticleLists = ({
  leftGenre,
  rightGenre,
  articleItems,
}: ArticleListsProps) => {
  const { classes } = useStyles();
  const largerThanXs = useMediaQuery('xs');
  const largerThanSm = useMediaQuery('sm');
  const largerThanMd = useMediaQuery('md');
  const largerThanLg = useMediaQuery('lg');
  const largerThanXl = useMediaQuery('xl');

  return (
    <Card radius="md">
      <Group position="apart">
        <Text className="font-bold">{leftGenre}</Text>
        <Anchor size="sm" sx={{ lineHeight: 1 }}>
          {rightGenre}
        </Anchor>
      </Group>
      {largerThanSm ? (
        <SimpleGrid mt="md" className="grid-cols-2">
          {articleItems.map((articleItem, index) => {
            if (index < 2) {
              return <ArticleDetail key={articleItem.date} {...articleItem} />;
            } else {
              return <ArticleItem key={articleItem.date} {...articleItem} />;
            }
          })}
        </SimpleGrid>
      ) : (
        <SimpleGrid my="md" className="mx-auto grid-cols-1 place-items-center">
          {articleItems.map((articleItem) => (
            <ArticleItem key={articleItem.date} {...articleItem} />
          ))}
        </SimpleGrid>
      )}
      <Card
        className="hover:bg-m_gray-0 mt-3 flex items-center justify-center border-x-0 py-2 font-semibold"
        withBorder
        component="a"
        href="#"
      >
        すべての記事を見る
      </Card>
    </Card>
  );
};

export default TrendArticleLists;