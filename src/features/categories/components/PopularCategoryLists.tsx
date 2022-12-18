/* eslint-disable tailwindcss/no-custom-classname */
import { Anchor, Card, Group, SimpleGrid, Text } from '@mantine/core';
import React from 'react';

import CategoryItem from '../../../components/Category/CategoryItem';
import { useMediaQuery } from '../../../lib/mantine/useMediaQuery';
import { Categories } from '../types';

const PopularCategoryLists = ({ categories }: Categories) => {
  const largerThanSm = useMediaQuery('sm');

  return (
    <Card radius="md">
      <Group position="apart">
        <Text className="font-bold">人気のカテゴリ</Text>
        <Anchor size="sm" sx={{ lineHeight: 1 }}>
          すべてのカテゴリを見る
        </Anchor>
      </Group>
      {largerThanSm ? (
        <>
          <SimpleGrid mt="md" className="grid-cols-3">
            {categories.slice(0, 3).map((item) => (
              <CategoryItem key={item.title} {...item} />
            ))}
          </SimpleGrid>
          <SimpleGrid my="md" className="grid-cols-6">
            {categories.slice(3).map((item) => (
              <CategoryItem key={item.title} {...item} />
            ))}
          </SimpleGrid>
        </>
      ) : (
        <SimpleGrid my="md" className="xs:grid-cols-4 grid-cols-3">
          {categories.map((item) => (
            <CategoryItem key={item.title} {...item} />
          ))}
        </SimpleGrid>
      )}
      <Card
        className="hover:bg-m_gray-0 flex items-center justify-center border-x-0 py-2 font-semibold"
        withBorder
        component="a"
        href="#"
      >
        すべてのカテゴリを見る
      </Card>
    </Card>
  );
};

export default PopularCategoryLists;
