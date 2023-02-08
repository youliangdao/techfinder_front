import { Space } from '@mantine/core';
import CategoryArticleLists from 'articles/components/CategoryArticleLists';
import CategoryShareInfo from 'articles/components/CategoryShareInfo';
import { useQueryCategoryArticles } from 'articles/hooks/useQueryCategoryArticles';
import { useQueryCategory } from 'categories/hooks/useQueyCategory';
import { Head } from 'components/Head/Head';
import NotFoundTitle from 'components/NotFoundTitle';
import { categoryTable } from 'config';
import { useMediaQuery } from 'lib/mantine/useMediaQuery';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import CategoryArticlesHeader from '../components/CategoryArticlesHeader';

const CategoryFilterableArticles = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  const { data, status, params } = useQueryCategoryArticles();
  const fetchCategory = useQueryCategory();
  const largerThanMd = useMediaQuery('md');
  const categoryFlag = Array.from(categoryTable.keys()).includes(
    params.categoryName || ''
  );
  const tabFlag = params.tab === 'all' || params.tab === 'popular';
  if (categoryFlag && tabFlag) {
    return (
      <>
        <Head
          title={`${categoryTable.get(
            params.categoryName || ''
          )}に関する記事一覧`}
        />
        <CategoryArticlesHeader />
        <Space h={50} />
        {/* <form
          onSubmit={(e) => {
            e.preventDefault();
            if (inputRef.current?.value) {
              navigate(
                `/categories/${params.categoryName}/${params.tab}/search?q=${inputRef.current?.value}`
              );
            } else {
              navigate(`/categories/${params.categoryName}/${params.tab}`);
            }
          }}
        >
          <TextInput
            icon={<IconSearch size={18} stroke={1.5} />}
            radius="lg"
            size="sm"
            placeholder="キーワードを入力..."
            ref={inputRef}
          />
        </form>
        <Space h="xl" /> */}
        {largerThanMd ? (
          <div className="flex justify-start space-x-14">
            <div className="md:w-3/4">
              <CategoryArticleLists
                leftGenre="新着記事"
                rightGenre="人気記事"
                articleItems={data ? data : []}
                isLoading={
                  status === 'loading' || fetchCategory.status === 'loading'
                }
              />
            </div>
            <CategoryShareInfo />
          </div>
        ) : (
          <CategoryArticleLists
            leftGenre="新着記事"
            rightGenre="人気記事"
            articleItems={data ? data : []}
            isLoading={
              status === 'loading' || fetchCategory.status === 'loading'
            }
          />
        )}
      </>
    );
  }
  return <NotFoundTitle />;
};

export default CategoryFilterableArticles;
