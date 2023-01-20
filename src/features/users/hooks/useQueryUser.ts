import { useQuery } from '@tanstack/react-query';
import { getUser } from 'users/api/getUser';
import { User } from 'users/types';

export const useQueryUser = (id: string) => {
  return useQuery<User>({
    queryKey: ['user', id],
    queryFn: () => getUser(id),
    staleTime: Infinity,
    onError: () => {
      alert('ユーザー情報の取得に失敗しました');
    },
  });
};
