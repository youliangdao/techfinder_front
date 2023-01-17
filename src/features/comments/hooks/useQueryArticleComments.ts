import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Comment, ResponseCommentType } from 'comments/types';
import { endpoint } from 'config';
import { formatDistanceToNow } from 'date-fns';
import { ja } from 'date-fns/locale';
import { getUserAvatar } from 'users/api/getUserAvatar';

export const useQueryArticleComments = (id: string) => {
  const fetchArticleComments = async () => {
    const res = await axios.get<ResponseCommentType>(
      `${endpoint}/articles/${id}/comments`
    );

    const articleComments = await Promise.all(
      res.data.data.map(async (comment) => {
        const avatar = await getUserAvatar(comment.relationships.user.data.id);
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
              res.data.included.find(
                (user) => user.id === comment.relationships.user.data.id
              )?.attributes.nickname || '',
            image: avatar,
          },
        };
      })
    );

    return articleComments;
  };

  return useQuery<Comment[], Error>({
    queryKey: ['articleComments', id],
    queryFn: fetchArticleComments,
    staleTime: 0,
    refetchOnWindowFocus: true,
    onError: (error) => {
      alert(`コメント情報の取得に失敗しました。\n${error.message}`);
    },
  });
};
