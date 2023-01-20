import { useQuery } from '@tanstack/react-query';
import { Article } from 'articles/types';
import { getUserCommentArticles } from 'users/api/getUserCommentArticles';

export const useQueryUserComments = (id: string) => {
  return useQuery<Article[]>({
    queryKey: ['userComments', id],
    queryFn: () => getUserCommentArticles(id),
    staleTime: 0,
    refetchOnWindowFocus: true,
    onError: () => {
      alert('ユーザーのコメント情報の取得に失敗しました');
    },
  });
};
