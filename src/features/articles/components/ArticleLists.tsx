/* eslint-disable tailwindcss/no-custom-classname */
import {
  Card,
  Pagination,
  SimpleGrid,
  Skeleton,
  Space,
  Tabs,
} from '@mantine/core';
import { useQueryBookmarks } from 'articles/hooks/useQueryBookmarks';
import React, { useEffect, useState } from 'react';
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';

import { useMediaQuery } from '../../../lib/mantine/useMediaQuery';
import { ArticleListsProps } from '../types';
import ArticleDetail from './ArticleDetail';
import ArticleItem from './ArticleItem';

const ITEMS_PAGE_SIZE = 18;

const ArticleLists = ({
  leftGenre,
  rightGenre,
  articleItems,
  isLoading,
}: ArticleListsProps) => {
  const largerThanSm = useMediaQuery('sm');
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { hash, pathname } = useLocation();
  const params = useParams();
  const userBookmarksQuery = useQueryBookmarks();

  const [currentArticleItems, setCurrentArticleItems] = useState(
    articleItems.slice(0, ITEMS_PAGE_SIZE)
  );

  const articlePage = parseInt(searchParams.get('page') || '1');
  const filterInput = searchParams.get('q') || '';
  const pageCount = Math.ceil(
    articleItems.filter((articleItem) =>
      new RegExp(filterInput, 'i').test(articleItem.title)
    ).length / ITEMS_PAGE_SIZE
  );

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
    const filterArticleItems = articleItems.filter((articleItem) =>
      new RegExp(filterInput, 'i').test(articleItem.title)
    );
    const from = (articlePage - 1) * ITEMS_PAGE_SIZE;
    const to = from + ITEMS_PAGE_SIZE;
    setCurrentArticleItems(filterArticleItems.slice(from, to));
  }, [articlePage, articleItems, filterInput, hash]);

  return (
    <Card radius="md">
      <Tabs
        value={params.tab}
        onTabChange={(value) => {
          navigate(`/articles/${value}`);
        }}
        variant="pills"
      >
        <Tabs.List className="ml-5 flex max-md:justify-center">
          <Tabs.Tab
            value="all"
            className="bg-m_gray-1 font-semibold max-sm:h-8"
          >
            {leftGenre}
          </Tabs.Tab>
          <Tabs.Tab
            value="popular"
            className="bg-m_gray-1 font-semibold max-sm:h-8"
          >
            {rightGenre}
          </Tabs.Tab>
        </Tabs.List>
      </Tabs>
      <Space h="lg" />
      {isLoading || userBookmarksQuery.isLoading ? (
        largerThanSm ? (
          <SimpleGrid mt="md" className="grid-cols-2">
            {[...Array(18)].map((_, index) => {
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
        <>
          <SimpleGrid mt="md" className="grid-cols-2">
            {currentArticleItems.map((articleItem, index) => {
              if (index < 2) {
                return <ArticleDetail key={articleItem.id} {...articleItem} />;
              } else {
                return <ArticleItem key={articleItem.id} {...articleItem} />;
              }
            })}
          </SimpleGrid>
          <Card className="mt-10 flex items-center justify-center">
            <Pagination
              total={pageCount}
              onChange={(nextPage) => {
                if (filterInput) {
                  navigate(`${pathname}?q=${filterInput}&page=${nextPage}`);
                } else {
                  navigate(`${pathname}?page=${nextPage}`);
                }
              }}
              page={articlePage}
            />
          </Card>
        </>
      ) : (
        <>
          <SimpleGrid
            my="md"
            className="mx-auto grid-cols-1 place-items-center"
          >
            {currentArticleItems.map((articleItem) => (
              <ArticleItem key={articleItem.id} {...articleItem} />
            ))}
          </SimpleGrid>
          <Card className="mt-10 flex items-center justify-center">
            <Pagination
              total={pageCount}
              onChange={(nextPage) => {
                if (filterInput) {
                  navigate(`${pathname}?q=${filterInput}&page=${nextPage}`);
                } else {
                  navigate(`${pathname}?page=${nextPage}`);
                }
              }}
              page={articlePage}
            />
          </Card>
        </>
      )}
    </Card>
  );
};

export default ArticleLists;
