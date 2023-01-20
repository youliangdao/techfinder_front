import React from 'react';
import { useParams } from 'react-router-dom';
import UserArticleLists from 'users/components/UserArticleLists';
import { useQueryUserComments } from 'users/hooks/useQueryUserCommentArticles';
import { useQueryUserLikes } from 'users/hooks/useQueryUserLikeArticles';

const UserArticlesContainer = ({ id }: { id: string }) => {
  const userCommentsQuery = useQueryUserComments(id);
  const userLikesQuery = useQueryUserLikes(id);
  const userAllArticles = [
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
          name: 'コメントした記事',
          path: 'comments',
        },
        {
          name: 'いいねした記事',
          path: 'likes',
        },
      ]}
      articleItems={
        params.tab === 'comments'
          ? uniqueComments
          : params.tab === 'likes'
          ? userLikesQuery.data || []
          : uniqueAllArticles
      }
      isLoading={userCommentsQuery.isLoading || userLikesQuery.isLoading}
      isLoginUser={false}
    />
  );
};

export default UserArticlesContainer;
