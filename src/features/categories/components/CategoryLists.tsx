/* eslint-disable tailwindcss/no-custom-classname */
import { Card, SimpleGrid } from '@mantine/core';
import React from 'react';

import { Categories } from '../types';
import CategoryItem from './CategoryItem';

const CategoryLists = ({ categories }: Categories) => {
  return (
    <Card radius="md">
      <SimpleGrid my="md" className="xs:grid-cols-4 grid-cols-3 sm:grid-cols-6">
        {categories.map((category) => (
          <CategoryItem key={category.title} {...category} />
        ))}
      </SimpleGrid>
    </Card>
  );
};

export default CategoryLists;
