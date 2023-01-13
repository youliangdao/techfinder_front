import TrendArticleLists from 'articles/components/TrendArticleLists';
import { useQueryTrendArticles } from 'articles/hooks/useQueryTrendArticles';
import React from 'react';

const TrendArticles = () => {
  const { articleItems, status } = useQueryTrendArticles();
  return (
    <TrendArticleLists
      articleItems={articleItems ? articleItems : []}
      isLoading={status === 'loading'}
    />
  );
};

export default TrendArticles;
