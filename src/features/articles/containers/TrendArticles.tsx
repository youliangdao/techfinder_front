import TrendArticleLists from 'articles/components/TrendArticleLists';
import { useQueryTrendArticles } from 'articles/hooks/useQueryTrendArticles';
import React from 'react';

const TrendArticles = () => {
  const { articleItems, status } = useQueryTrendArticles();
  return (
    <TrendArticleLists
      articleItems={
        articleItems
          ? articleItems.slice().sort((a, b) => (a.date > b.date ? 1 : -1))
          : []
      }
      isLoading={status === 'loading'}
    />
  );
};

export default TrendArticles;
