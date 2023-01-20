import { useQuery } from '@tanstack/react-query';
import { Article } from 'articles/types';
import { getUserLikeArticles } from 'users/api/getUserLikeArticle';

export const useQueryUserLikes = (id: string) => {
  return useQuery<Article[]>({
    queryKey: ['userLikes', id],
    queryFn: () => getUserLikeArticles(id),
    staleTime: 0,
    refetchOnWindowFocus: true,
    onError: () => {
      alert('ユーザーのコメント情報の取得に失敗しました');
    },
  });
};
