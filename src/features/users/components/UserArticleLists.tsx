/* eslint-disable tailwindcss/no-custom-classname */
import { Card, Pagination, SimpleGrid, Tabs } from '@mantine/core';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useMediaQuery } from '../../../lib/mantine/useMediaQuery';
import ArticleDetail from '../../articles/components/ArticleDetail';
import ArticleItem from '../../articles/components/ArticleItem';
import { ArticleListsProps } from '../../articles/types';

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
