import { useQuery } from '@tanstack/react-query';
import { getLikes } from 'articles/api/getLikes';
import { Article } from 'articles/types';
import { selectUser } from 'store/ducks/userSlice';
import { useAppSelector } from 'store/hooks';

export const useQueryLikes = () => {
  const currentUser = useAppSelector(selectUser);

  return useQuery<Article[]>({
    queryKey: ['userLikes', currentUser.uid ? currentUser.uid : ''],
    queryFn: getLikes,
    staleTime: Infinity,
    onError: (error) => {
      alert(`いいね情報の取得に失敗しました。`);
    },
  });
};
