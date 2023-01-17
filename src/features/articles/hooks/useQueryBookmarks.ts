import { useQuery } from '@tanstack/react-query';
import { getBookmarks } from 'articles/api/getBookmarks';
import { Article } from 'articles/types';
import { selectUser } from 'store/ducks/userSlice';
import { useAppSelector } from 'store/hooks';

export const useQueryBookmarks = () => {
  const currentUser = useAppSelector(selectUser);

  return useQuery<Article[]>({
    queryKey: ['userBookmarks', currentUser.uid ? currentUser.uid : ''],
    queryFn: getBookmarks,
    staleTime: Infinity,
    onError: (error) => {
      alert(`ブックマーク情報の取得に失敗しました。`);
    },
  });
};
