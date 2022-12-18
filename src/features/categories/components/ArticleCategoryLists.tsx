/* eslint-disable tailwindcss/no-custom-classname */
import { Card, SimpleGrid, Space, Text } from '@mantine/core';
import React from 'react';

import CategoryItem from '../../../components/Category/CategoryItem';
import { Categories } from '../types';

const ArticleCategoryLists = ({ categories }: Categories) => {
  return (
    <Card radius="md" withBorder>
      <Text className="xs:text-lg text-md font-bold">カテゴリ一覧</Text>
      <Space className="xs:h-5 h-3" />
      <SimpleGrid
        my="md"
        className="xs:grid-cols-5 grid-cols-3 sm:grid-cols-6 md:grid-cols-8"
      >
        {categories.map((item) => (
          <CategoryItem key={item.title} {...item} />
        ))}
      </SimpleGrid>
    </Card>
  );
};

export default ArticleCategoryLists;
