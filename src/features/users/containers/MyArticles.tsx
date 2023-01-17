import { useQueryBookmarks } from 'articles/hooks/useQueryBookmarks';
import { useQueryComments } from 'articles/hooks/useQueryComments';
import React from 'react';
import { useParams } from 'react-router-dom';
import UserArticleLists from 'users/components/UserArticleLists';

const MyArticles = () => {
  const userBookmarksQuery = useQueryBookmarks();
  const userCommentsQuery = useQueryComments();
  const userBookmarksComments = [
    ...(userBookmarksQuery.data || []),
    ...(userCommentsQuery.data || []),
  ];
  const uniqueComments = Array.from(
    new Map(
      (userCommentsQuery.data || []).map((article) => [article.id, article])
    ).values()
  );
  const uniqueBookmarksComments = Array.from(
    new Map(
      userBookmarksComments.map((article) => [article.id, article])
    ).values()
  );

  const params = useParams();

  return (
    <UserArticleLists
      leftGenre="ブックマークした記事"
      rightGenre="コメントした記事"
      articleItems={
        params.tab === 'bookmarks'
          ? userBookmarksQuery.data || []
          : params.tab === 'comments'
          ? uniqueComments
          : uniqueBookmarksComments
      }
      isLoading={userBookmarksQuery.isLoading || userCommentsQuery.isLoading}
    />
  );
};

export default MyArticles;
