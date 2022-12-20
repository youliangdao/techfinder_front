/* eslint-disable tailwindcss/no-custom-classname */
import {
  Card,
  createStyles,
  Pagination,
  SimpleGrid,
  Tabs,
} from '@mantine/core';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import ArticleDetail from '../../../components/Article/ArticleDetail';
import ArticleItem from '../../../components/Article/ArticleItem';
import { useMediaQuery } from '../../../lib/mantine/useMediaQuery';
import { ArticleListsProps } from '../../articles/types';

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

const UserArticleLists = ({
  leftGenre,
  rightGenre,
  articleItems,
}: ArticleListsProps) => {
  const largerThanSm = useMediaQuery('sm');
  const navigate = useNavigate();
  const { genre } = useParams();

  console.log(genre);

  return (
    <Card radius="md">
      <Tabs
        value={genre}
        onTabChange={(value) => navigate(`/dashboards/${value}`)}
      >
        <Tabs.List className="flex justify-around">
          <Tabs.Tab value="all">すべての記事</Tabs.Tab>
          <Tabs.Tab value="likes">{leftGenre}</Tabs.Tab>
          <Tabs.Tab value="bookmarks">{rightGenre}</Tabs.Tab>
        </Tabs.List>
      </Tabs>
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
      <Card className="mt-10 flex items-center justify-center">
        <Pagination total={10} />
      </Card>
    </Card>
  );
};

export default UserArticleLists;
