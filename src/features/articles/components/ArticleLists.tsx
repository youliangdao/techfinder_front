/* eslint-disable tailwindcss/no-custom-classname */
import {
  Card,
  Center,
  Loader,
  Pagination,
  SimpleGrid,
  Tabs,
} from '@mantine/core';
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

const ITEMS_PAGE_SIZE = 10;

const ArticleLists = ({
  leftGenre,
  rightGenre,
  articleItems,
  // filterInput,
  isLoading,
}: ArticleListsProps) => {
  const largerThanSm = useMediaQuery('sm');
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const articlePage = parseInt(searchParams.get('page') || '1');
  const filterInput = searchParams.get('q') || '';
  const { hash, pathname } = useLocation();
  const params = useParams();

  const [currentArticleItems, setCurrentArticleItems] = useState(
    articleItems.slice(0, ITEMS_PAGE_SIZE)
  );

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
      >
        <Tabs.List className="flex justify-around">
          <Tabs.Tab value="all">{leftGenre}</Tabs.Tab>
          <Tabs.Tab value="popular">{rightGenre}</Tabs.Tab>
        </Tabs.List>
      </Tabs>
      {isLoading ? (
        <Center className="py-20">
          <Loader />
        </Center>
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
