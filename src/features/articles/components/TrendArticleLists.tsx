/* eslint-disable tailwindcss/no-custom-classname */
import { Anchor, Card, Group, SimpleGrid, Skeleton, Text } from '@mantine/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useMediaQuery } from '../../../lib/mantine/useMediaQuery';
import { ArticleListsProps } from '../types';
import ArticleDetail from './ArticleDetail';
import ArticleItem from './ArticleItem';

const TrendArticleLists = ({
  articleItems,
  isLoading,
}: Pick<ArticleListsProps, 'articleItems'> & { isLoading: boolean }) => {
  const largerThanSm = useMediaQuery('sm');

  const navigate = useNavigate();

  return (
    <Card radius="md">
      <Group position="apart">
        <Text className="font-bold">急上昇中の記事</Text>
        <Anchor
          size="sm"
          className="leading-none"
          onClick={() => navigate('/articles/all')}
        >
          すべての記事を見る
        </Anchor>
      </Group>
      {isLoading ? (
        largerThanSm ? (
          <SimpleGrid mt="md" className="grid-cols-2">
            {[...Array(10)].map((_, index) => {
              if (index < 2) {
                return (
                  <Skeleton key={index} visible={true} height={300}>
                    <ArticleDetail
                      image=""
                      categories={[
                        {
                          title: '',
                          path: '',
                        },
                      ]}
                      title=""
                      date=""
                      media={{
                        name: '',
                        image: '',
                      }}
                      link=""
                      id="1"
                    />
                  </Skeleton>
                );
              } else {
                return (
                  <Skeleton key={index} visible={true} height={170}>
                    <ArticleItem
                      image=""
                      categories={[
                        {
                          title: '',
                          path: '',
                        },
                      ]}
                      title=""
                      date=""
                      media={{
                        name: '',
                        image: '',
                      }}
                      link=""
                      id="1"
                    />
                  </Skeleton>
                );
              }
            })}
          </SimpleGrid>
        ) : (
          <SimpleGrid
            my="md"
            className="mx-auto grid-cols-1 place-items-center"
          >
            {[...Array(18)].map((_, index) => {
              return (
                <Skeleton key={index} visible={true} height={150}>
                  <ArticleItem
                    image=""
                    categories={[
                      {
                        title: '',
                        path: '',
                      },
                    ]}
                    title=""
                    date=""
                    media={{
                      name: '',
                      image: '',
                    }}
                    link=""
                    id="1"
                  />
                </Skeleton>
              );
            })}
          </SimpleGrid>
        )
      ) : largerThanSm ? (
        <SimpleGrid mt="md" className="grid-cols-2">
          {articleItems.map((articleItem, index) => {
            if (index < 2) {
              return <ArticleDetail key={articleItem.id} {...articleItem} />;
            } else {
              return <ArticleItem key={articleItem.id} {...articleItem} />;
            }
          })}
        </SimpleGrid>
      ) : (
        <SimpleGrid my="md" className="mx-auto grid-cols-1 place-items-center">
          {articleItems.map((articleItem) => (
            <ArticleItem key={articleItem.id} {...articleItem} />
          ))}
        </SimpleGrid>
      )}
      <Card
        className="hover:bg-m_gray-0 mt-3 flex items-center justify-center border-x-0 py-2 font-semibold hover:cursor-pointer"
        withBorder
        onClick={() => navigate('/articles/all')}
      >
        すべての記事を見る
      </Card>
    </Card>
  );
};

export default TrendArticleLists;
