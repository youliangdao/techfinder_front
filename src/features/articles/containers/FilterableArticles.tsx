import CategoryShareInfo from 'articles/components/CategoryShareInfo';
import { useQueryArticles } from 'articles/hooks/useQueryArticles';
import { Head } from 'components/Head/Head';
import NotFoundTitle from 'components/NotFoundTitle';
import { useMediaQuery } from 'lib/mantine/useMediaQuery';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import ArticleLists from '../components/ArticleLists';

const FilterableArticles = () => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const { status, data, params } = useQueryArticles();
  const largerThanMd = useMediaQuery('md');
  if (params.tab === 'all' || params.tab === 'popular') {
    return (
      <>
        <Head title="記事一覧" />
        {largerThanMd ? (
          <div className="flex justify-start space-x-14">
            <div className="md:w-3/4">
              <ArticleLists
                leftGenre="新着記事"
                rightGenre="人気記事"
                articleItems={data ? data : []}
                isLoading={status === 'loading'}
              />
            </div>
            <CategoryShareInfo />
          </div>
        ) : (
          <ArticleLists
            leftGenre="新着記事"
            rightGenre="人気記事"
            articleItems={data ? data : []}
            isLoading={status === 'loading'}
          />
        )}
      </>
    );
  }
  return <NotFoundTitle />;
};

export default FilterableArticles;
