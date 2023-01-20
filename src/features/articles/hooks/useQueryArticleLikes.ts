import { useQuery } from '@tanstack/react-query';
import { getLikeCounts } from 'articles/api/getLikeCounts';

export const useQueryArticleLikes = (id: string) => {
  return useQuery<number>({
    queryKey: ['articleLikes', id],
    queryFn: () => getLikeCounts(id),
    staleTime: 0,
    refetchOnWindowFocus: true,
    onError: (error) => {
      alert('いいね数の取得に失敗しました');
    },
  });
};
