import { useQuery } from '@tanstack/react-query';
import { getBookmarkCounts } from 'articles/api/getBookmarkCounts';

export const useQueryArticleBookmarks = (id: string) => {
  return useQuery<number>({
    queryKey: ['articleBookmarks', id],
    queryFn: () => getBookmarkCounts(id),
    staleTime: 0,
    refetchOnWindowFocus: true,
    onError: (error) => {
      console.error('ブックマーク数の取得に失敗しました');
    },
  });
};
