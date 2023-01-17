import { useQuery } from '@tanstack/react-query';
import { fetchCategories } from 'categories/api/fetchCategories';
import { CategoryType } from 'categories/types';

export const useQueryCategories = () => {
  return useQuery<CategoryType[], Error>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
    staleTime: Infinity,
    onError: (error) =>
      alert(`カテゴリー情報の取得に失敗しました。\n${error.message}`),
  });
};
