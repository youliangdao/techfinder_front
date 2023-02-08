import { useQuery } from '@tanstack/react-query';
import { getComments } from 'articles/api/getComments';
import { Article } from 'articles/types';
import { selectUser } from 'store/ducks/userSlice';
import { useAppSelector } from 'store/hooks';

export const useQueryComments = () => {
  const currentUser = useAppSelector(selectUser);
  return useQuery<Article[]>({
    queryKey: ['userComments', currentUser.uid ? currentUser.uid : ''],
    queryFn: getComments,
    staleTime: Infinity,
    onError: (error) => console.error('コメントした記事の取得に失敗しました'),
  });
};
