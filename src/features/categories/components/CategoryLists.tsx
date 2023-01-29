/* eslint-disable tailwindcss/no-custom-classname */
import { Card, SimpleGrid, Skeleton } from '@mantine/core';
import { CategoryListsType } from 'categories/types';
import React from 'react';

import CategoryItem from './CategoryItem';

const CategoryLists = ({
  categories,
  filterInput,
  isLoading,
}: CategoryListsType) => {
  return (
    <Card radius="md">
      {isLoading ? (
        <SimpleGrid
          my="md"
          className="xs:grid-cols-4 grid-cols-3 sm:grid-cols-6"
        >
          {[...Array(74)].map((_, index) => (
            <Skeleton height={100} visible={true} key={index} />
          ))}
        </SimpleGrid>
      ) : (
        <SimpleGrid
          my="md"
          className="xs:grid-cols-4 grid-cols-3 sm:grid-cols-6"
        >
          {categories.map((category) => {
            if (new RegExp(filterInput, 'i').test(category.title)) {
              return <CategoryItem key={category.title} {...{ category }} />;
            }
          })}
        </SimpleGrid>
      )}
    </Card>
  );
};

export default CategoryLists;
