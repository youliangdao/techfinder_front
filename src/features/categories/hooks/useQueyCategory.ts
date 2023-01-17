import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { CategoryType } from 'categories/types';
import { endpoint } from 'config';
import { useParams } from 'react-router-dom';

export const useQueryCategory = () => {
  const params = useParams<{ categoryName: string; tab: 'all' | 'popular' }>();
  const fetchCategory = async () => {
    const res = await axios.get<{ data: CategoryType }>(
      `${endpoint}/categories/${params.categoryName}`
    );

    return res.data.data;
  };

  return useQuery<CategoryType, Error>({
    queryKey: ['category', params.categoryName],
    queryFn: fetchCategory,
    staleTime: Infinity,
    onError: (error) =>
      alert(`カテゴリー情報の取得に失敗しました。\n${error.message}`),
  });
};
