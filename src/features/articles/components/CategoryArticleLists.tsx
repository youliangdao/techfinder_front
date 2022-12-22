/* eslint-disable tailwindcss/no-custom-classname */
import { Card, Pagination, SimpleGrid, Tabs } from '@mantine/core';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useMediaQuery } from '../../../lib/mantine/useMediaQuery';
import { ArticleListsProps } from '../types';
import ArticleDetail from './ArticleDetail';
import ArticleItem from './ArticleItem';

const CategoryArticleLists = ({
  leftGenre,
  rightGenre,
  articleItems,
}: ArticleListsProps) => {
  const largerThanSm = useMediaQuery('sm');
  const navigate = useNavigate();
  const { categoryName, articleGenre } = useParams();

  return (
    <Card radius="md">
      <Tabs
        value={articleGenre}
        onTabChange={(value) =>
          navigate(`/categories/${categoryName}/${value}`)
        }
      >
        <Tabs.List className="flex justify-around">
          <Tabs.Tab value="all">{leftGenre}</Tabs.Tab>
          <Tabs.Tab value="popular">{rightGenre}</Tabs.Tab>
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

export default CategoryArticleLists;