/* eslint-disable tailwindcss/no-custom-classname */
import {
  Card,
  Center,
  Loader,
  Pagination,
  SimpleGrid,
  Tabs,
} from '@mantine/core';
import ArticleItem from 'articles/components/ArticleItem';
import React, { useEffect, useState } from 'react';
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import { UserArticleListsType } from 'users/types';

import { useMediaQuery } from '../../../lib/mantine/useMediaQuery';

const ITEMS_PAGE_SIZE = 10;

const UserArticleLists = ({
  genres,
  articleItems,
  isLoading,
}: UserArticleListsType) => {
  const largerThanSm = useMediaQuery('sm');
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const articlePage = parseInt(searchParams.get('page') || '1');
  const params = useParams();

  const { hash, pathname } = useLocation();

  const [currentArticleItems, setCurrentArticleItems] = useState(
    articleItems.slice(0, ITEMS_PAGE_SIZE)
  );

  const pageCount = Math.ceil(articleItems.length / ITEMS_PAGE_SIZE);

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
    const from = (articlePage - 1) * ITEMS_PAGE_SIZE;
    const to = from + ITEMS_PAGE_SIZE;
    setCurrentArticleItems(articleItems.slice(from, to));
  }, [articlePage, articleItems, hash, pathname]);

  return (
    <Card radius="md" className="max-sm:px-0">
      <Tabs
        value={params.tab}
        onTabChange={(value) => {
          navigate(`/dashboards/${value}`);
        }}
      >
        <Tabs.List className="flex justify-around">
          <Tabs.Tab value="all" className="max-sm:text-xs">
            すべて
          </Tabs.Tab>
          {genres.map((genre) => (
            <Tabs.Tab
              key={genre.path}
              value={genre.path}
              className="max-sm:text-xs"
            >
              {genre.name}
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </Tabs>
      {isLoading ? (
        <Center className="py-20">
          <Loader />
        </Center>
      ) : largerThanSm ? (
        <>
          <SimpleGrid mt="md" className="grid-cols-2">
            {currentArticleItems.map((articleItem, index) => (
              <ArticleItem key={articleItem.id} {...articleItem} />
            ))}
          </SimpleGrid>
          <Card className="mt-10 flex items-center justify-center">
            <Pagination
              total={pageCount}
              onChange={(nextPage) => {
                navigate(`${pathname}?page=${nextPage}`);
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
                navigate(`${pathname}?page=${nextPage}`);
              }}
              page={articlePage}
            />
          </Card>
        </>
      )}
    </Card>
  );
};

export default UserArticleLists;
