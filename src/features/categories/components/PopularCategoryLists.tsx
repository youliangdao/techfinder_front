/* eslint-disable tailwindcss/no-custom-classname */
import { Anchor, Card, Group, SimpleGrid, Text } from '@mantine/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useMediaQuery } from '../../../lib/mantine/useMediaQuery';
import { Categories } from '../types';
import CategoryItem from './CategoryItem';

const PopularCategoryLists = ({ categories }: Categories) => {
  const largerThanSm = useMediaQuery('sm');
  const navigate = useNavigate();
  return (
    <Card radius="md">
      <Group position="apart">
        <Text className="font-bold">人気のカテゴリ</Text>
        <Anchor
          size="sm"
          sx={{ lineHeight: 1 }}
          onClick={() => navigate('/categories')}
        >
          すべてのカテゴリを見る
        </Anchor>
      </Group>
      {largerThanSm ? (
        <>
          <SimpleGrid mt="md" className="grid-cols-3">
            {categories.slice(0, 3).map((item) => (
              <CategoryItem key={item.id} {...item} />
            ))}
          </SimpleGrid>
          <SimpleGrid my="md" className="grid-cols-6">
            {categories.slice(3).map((item) => (
              <CategoryItem key={item.id} {...item} />
            ))}
          </SimpleGrid>
        </>
      ) : (
        <SimpleGrid my="md" className="xs:grid-cols-4 grid-cols-3">
          {categories.map((item) => (
            <CategoryItem key={item.id} {...item} />
          ))}
        </SimpleGrid>
      )}
      <Card
        className="hover:bg-m_gray-0 flex items-center justify-center border-x-0 py-2 font-semibold hover:cursor-pointer"
        withBorder
        onClick={() => navigate('/categories')}
      >
        すべてのカテゴリを見る
      </Card>
    </Card>
  );
};

export default PopularCategoryLists;
