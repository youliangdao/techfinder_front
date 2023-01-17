import { useQuery } from '@tanstack/react-query';
import { fetchPopularCategories } from 'categories/api/fetchPopularCategories';
import { CategoryType } from 'categories/types';

export const useQueryPopularCategories = () => {
  return useQuery<CategoryType[], Error>({
    queryKey: ['popularCategory'],
    queryFn: fetchPopularCategories,
    staleTime: Infinity,
    onError: (error) =>
      alert(`人気カテゴリー情報の取得に失敗しました。\n${error.message}`),
  });
};
