/* eslint-disable react/no-unescaped-entities */
import { Image, Text } from '@mantine/core';
import { Category } from 'categories/types';
import React from 'react';

const CategoryArticlesHeader = ({
  title,
  image,
}: Pick<Category, 'title' | 'image'>) => {
  return (
    <div className="xs:px-3 flex items-center justify-center space-x-3 sm:justify-start sm:px-5">
      <div className="flex h-20 items-center justify-center sm:h-24">
        <Image src={image} height={100} fit="contain" />
      </div>
      <Text className="text-2xl font-bold">"{title}"に関する記事</Text>
    </div>
  );
};

export default CategoryArticlesHeader;
