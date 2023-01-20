import { useQueryBookmarks } from 'articles/hooks/useQueryBookmarks';
import { useQueryComments } from 'articles/hooks/useQueryComments';
import { useQueryLikes } from 'articles/hooks/useQueryLikes';
import React from 'react';
import { useParams } from 'react-router-dom';
import UserArticleLists from 'users/components/UserArticleLists';

const MyArticles = () => {
  const userBookmarksQuery = useQueryBookmarks();
  const userCommentsQuery = useQueryComments();
  const userLikesQuery = useQueryLikes();
  const userAllArticles = [
    ...(userBookmarksQuery.data || []),
    ...(userCommentsQuery.data || []),
    ...(userLikesQuery.data || []),
  ];
  const uniqueComments = Array.from(
    new Map(
      (userCommentsQuery.data || []).map((article) => [article.id, article])
    ).values()
  );
  const uniqueAllArticles = Array.from(
    new Map(userAllArticles.map((article) => [article.id, article])).values()
  );

  const params = useParams();

  return (
    <UserArticleLists
      genres={[
        {
          name: 'ブックマークした記事',
          path: 'bookmarks',
        },
        {
          name: 'コメントした記事',
          path: 'comments',
        },
        {
          name: 'いいねした記事',
          path: 'likes',
        },
      ]}
      articleItems={
        params.tab === 'bookmarks'
          ? userBookmarksQuery.data || []
          : params.tab === 'comments'
          ? uniqueComments
          : params.tab === 'likes'
          ? userLikesQuery.data || []
          : uniqueAllArticles
      }
      isLoading={
        userBookmarksQuery.isLoading ||
        userCommentsQuery.isLoading ||
        userLikesQuery.isLoading
      }
    />
  );
};

export default MyArticles;
