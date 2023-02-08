import {
  Button,
  Card,
  Center,
  SimpleGrid,
  Skeleton,
  Space,
  Tabs,
  Text,
} from '@mantine/core';
import { StockArticle } from 'articles/types';
import { formatDistanceToNow } from 'date-fns';
import { ja } from 'date-fns/locale';
import { useMediaQuery } from 'lib/mantine/useMediaQuery';
import React, { useEffect, useState } from 'react';

import ArticleDetail from '../../articles/components/ArticleDetail';
import ArticleItem from '../../articles/components/ArticleItem';
import { useQueryGenreArticles } from '../hooks/useQueryGenreArticles';

const PAGE_SIZE = 10;

const GenreArticleLists = () => {
  const largerThanSm = useMediaQuery('sm');

  const { data, status, params } = useQueryGenreArticles();

  const [activeTab, setActiveTab] = useState<string | null>('new');
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
    setActiveTab('new');

    return () => {
      setActiveTab('new');
      setPage(1);
    };
  }, [params.genre]);

  useEffect(() => {
    setPage(1);
  }, [activeTab]);

  let currentArticleItems = [];

  if (activeTab === 'new') {
    currentArticleItems =
      data
        ?.slice()
        .sort((a: StockArticle, b: StockArticle) =>
          a.date < b.date ? 1 : -1
        ) || [];
  } else {
    currentArticleItems =
      data
        ?.slice()
        .sort((a: StockArticle, b: StockArticle) =>
          a.stock < b.stock ? 1 : -1
        ) || [];
  }

  return (
    <>
      <Card radius="md">
        <Text className="text-center text-3xl font-bold max-sm:text-xl">
          おすすめの記事
        </Text>
        {largerThanSm ? <Space h={30} /> : <Space h="lg" />}
        {status === 'loading' ? (
          largerThanSm ? (
            <SimpleGrid mt="md" className="grid-cols-2">
              {[...Array(6)].map((_, index) => {
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
              {[...Array(6)].map((_, index) => {
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
            {data?.slice(0, 6).map((articleItem, index) => {
              if (index < 2) {
                return (
                  <ArticleDetail
                    key={articleItem.id}
                    image={articleItem.image}
                    categories={articleItem.categories}
                    title={articleItem.title}
                    date={formatDistanceToNow(new Date(articleItem.date), {
                      addSuffix: true,
                      locale: ja,
                    })}
                    media={articleItem.media}
                    link={articleItem.link}
                    id={articleItem.id}
                  />
                );
              } else {
                return (
                  <ArticleItem
                    key={articleItem.id}
                    image={articleItem.image}
                    categories={articleItem.categories}
                    title={articleItem.title}
                    date={formatDistanceToNow(new Date(articleItem.date), {
                      addSuffix: true,
                      locale: ja,
                    })}
                    media={articleItem.media}
                    link={articleItem.link}
                    id={articleItem.id}
                  />
                );
              }
            })}
          </SimpleGrid>
        ) : (
          <SimpleGrid
            my="md"
            className="mx-auto grid-cols-1 place-items-center"
          >
            {data?.slice(0, 6).map((articleItem) => (
              <ArticleItem
                key={articleItem.id}
                image={articleItem.image}
                categories={articleItem.categories}
                title={articleItem.title}
                date={formatDistanceToNow(new Date(articleItem.date), {
                  addSuffix: true,
                  locale: ja,
                })}
                media={articleItem.media}
                link={articleItem.link}
                id={articleItem.id}
              />
            ))}
          </SimpleGrid>
        )}
      </Card>
      <Space h={100} />
      <Card radius="md" className="">
        <Text className="text-center text-3xl font-bold max-sm:text-xl">
          {status === 'loading'
            ? 'すべての記事'
            : `すべての記事（${data?.length}記事)`}
        </Text>
        {largerThanSm ? <Space h={50} /> : <Space h={30} />}
        <Center>
          <Tabs variant="pills" value={activeTab} onTabChange={setActiveTab}>
            <Tabs.List position="center" grow>
              <Tabs.Tab
                value="new"
                className="bg-m_gray-1 text-base font-bold max-sm:h-8"
              >
                新着
              </Tabs.Tab>
              <Tabs.Tab
                value="popular"
                className="bg-m_gray-1 text-base font-bold max-sm:h-8"
              >
                人気
              </Tabs.Tab>
            </Tabs.List>
          </Tabs>
        </Center>
        <Space h="lg" />
        {status === 'loading' ? (
          largerThanSm ? (
            <SimpleGrid mt="md" className="grid-cols-2">
              {[...Array(10)].map((_, index) => {
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
              })}
            </SimpleGrid>
          ) : (
            <SimpleGrid
              my="md"
              className="mx-auto grid-cols-1 place-items-center"
            >
              {[...Array(10)].map((_, index) => {
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
            {currentArticleItems
              .slice(0, (page - 1) * PAGE_SIZE + PAGE_SIZE)
              .map((articleItem, index) => (
                <ArticleItem
                  key={articleItem.id}
                  image={articleItem.image}
                  categories={articleItem.categories}
                  title={articleItem.title}
                  date={formatDistanceToNow(new Date(articleItem.date), {
                    addSuffix: true,
                    locale: ja,
                  })}
                  media={articleItem.media}
                  link={articleItem.link}
                  id={articleItem.id}
                />
              ))}
          </SimpleGrid>
        ) : (
          <SimpleGrid
            my="md"
            className="mx-auto grid-cols-1 place-items-center"
          >
            {currentArticleItems
              .slice(0, (page - 1) * PAGE_SIZE + PAGE_SIZE)
              .map((articleItem) => (
                <ArticleItem
                  key={articleItem.id}
                  image={articleItem.image}
                  categories={articleItem.categories}
                  title={articleItem.title}
                  date={formatDistanceToNow(new Date(articleItem.date), {
                    addSuffix: true,
                    locale: ja,
                  })}
                  media={articleItem.media}
                  link={articleItem.link}
                  id={articleItem.id}
                />
              ))}
          </SimpleGrid>
        )}
        {largerThanSm ? <Space h={50} /> : <Space h="lg" />}
        {data?.length &&
          data.length - ((page - 1) * PAGE_SIZE + PAGE_SIZE) > 0 && (
            <Center>
              <Button onClick={() => setPage((prev) => prev + 1)}>
                {`もっと見る（あと${
                  data.length - ((page - 1) * PAGE_SIZE + PAGE_SIZE)
                }記事）`}
              </Button>
            </Center>
          )}
      </Card>
    </>
  );
};

export default GenreArticleLists;
