/* eslint-disable tailwindcss/no-custom-classname */
import { Card, SimpleGrid } from '@mantine/core';
import React from 'react';

import CategoryItem from '../../../components/Category/CategoryItem';
import { Categories } from '../types';

const CategoryLists = ({ categories }: Categories) => {
  return (
    <Card radius="md">
      <SimpleGrid my="md" className="xs:grid-cols-4 grid-cols-3 sm:grid-cols-6">
        {categories.map((item) => (
          <CategoryItem key={item.title} {...item} />
        ))}
      </SimpleGrid>
    </Card>
  );
};

export default CategoryLists;
