/* eslint-disable react/no-unescaped-entities */
import { Card, Group, Image, Space, Stack, Text } from '@mantine/core';
import { relationCategories } from 'articles/config';
import { categoryImageTable, categoryTable } from 'config';
import { useMediaQuery } from 'lib/mantine/useMediaQuery';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const CategoryArticlesHeader = () => {
  const params = useParams<{ categoryName: string; tab: 'all' | 'popular' }>();
  const largerThanSm = useMediaQuery('sm');

  const navigate = useNavigate();

  const categoryTitle =
    params.categoryName && categoryTable.get(params.categoryName);
  return (
    <>
      <div className="xs:px-3 flex items-center justify-center space-x-3 sm:px-5 md:justify-start">
        <div className="flex h-20 items-center justify-center sm:h-24">
          {params.categoryName === 'pwa' ? (
            <Image
              src={categoryImageTable.get('pwa')}
              height={50}
              fit="contain"
            />
          ) : largerThanSm ? (
            <Image
              src={categoryImageTable.get(params.categoryName || '')}
              height={100}
              fit="contain"
            />
          ) : (
            <Image
              src={categoryImageTable.get(params.categoryName || '')}
              height={80}
              fit="contain"
            />
          )}
        </div>
        <Text className="xs:text-2xl text-center text-xl font-bold">
          {`"${categoryTitle}"に関する記事`}
        </Text>
      </div>
      <Space h="xl" />
      <Stack spacing="lg">
        {relationCategories.get(params.categoryName || '')?.length && (
          <Card withBorder>
            <Text className="text-base font-bold">{`関連するカテゴリ（${
              relationCategories.get(params.categoryName || '')?.length
            }）`}</Text>
            <Space h="lg" />
            <Group>
              {relationCategories
                .get(params.categoryName || '')
                ?.map((category) => (
                  <Card
                    key={category.path}
                    className="bg-m_gray-0 hover:bg-m_gray-1 flex w-20 cursor-pointer flex-col items-center justify-center rounded-sm py-2 text-center sm:w-24"
                    onClick={() => navigate(`/categories/${category.path}/all`)}
                  >
                    {largerThanSm ? (
                      <Image src={category.image} fit="contain" height={50} />
                    ) : (
                      <Image src={category.image} fit="contain" height={30} />
                    )}
                    <Text ta="center" size="xs" mt={5}>
                      {categoryTable.get(category.path)}
                    </Text>
                  </Card>
                ))}
            </Group>
          </Card>
        )}
      </Stack>
    </>
  );
};

export default CategoryArticlesHeader;
