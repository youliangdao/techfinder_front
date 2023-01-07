import { fetchArticleComments } from 'comments/api/fetchArticleComments';
import CommentLists from 'comments/components/CommentLists';
import { Comment } from 'comments/types';
import { formatDistanceToNow } from 'date-fns';
import { ja } from 'date-fns/locale';
import React, { useEffect, useState } from 'react';
import { getUserAvatar } from 'users/api/getUserAvatar';

const ArticleComments = ({ articleId }: { articleId: string }) => {
  const [commentLists, setCommentLists] = useState<Comment[]>([]);

  useEffect(() => {
    fetchArticleComments(articleId)
      .then((data) => {
        (async () => {
          const newCommentLists = await Promise.all(
            data.data.map(async (comment) => {
              const avatar = await getUserAvatar(
                comment.relationships.user.data.id
              );
              return {
                id: comment.id,
                body: comment.attributes.body,
                postedAt: formatDistanceToNow(
                  new Date(comment.attributes.created_at),
                  {
                    addSuffix: true,
                    locale: ja,
                  }
                ),
                author: {
                  name:
                    data.included.find(
                      (user) => user.id === comment.relationships.user.data.id
                    )?.attributes.nickname || '',
                  image: avatar,
                },
              };
            })
          );
          setCommentLists(newCommentLists);
        })();
      })
      .catch((error) => {
        alert('コメントの取得に失敗しました');
      });
  }, []);
  return <CommentLists {...{ commentLists, articleId, setCommentLists }} />;
};

export default ArticleComments;
