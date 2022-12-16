import React from 'react';

import ArticleItems from '../articles/ArticleItems';

const MyArticles = () => {
  return (
    <>
      <ArticleItems
        leftGenre="いいねした記事"
        rightGenre="ブックマークした記事"
      />
    </>
  );
};

export default MyArticles;
