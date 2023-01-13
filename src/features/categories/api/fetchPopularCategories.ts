import axios, { AxiosResponse } from 'axios';
import { ResponseCategoryType } from 'categories/types';
import { endpoint } from 'config';

export const fetchPopularCategories = async () => {
  const res: AxiosResponse<ResponseCategoryType> = await axios.get(
    `${endpoint}/categories/popular`
  );
  return res.data.data;
};
