import axios from 'axios';
import { ResponseCategoryType } from 'categories/types';
import { endpoint } from 'config';

export const fetchCategories = async () => {
  const res = await axios.get<ResponseCategoryType>(`${endpoint}/categories`);

  return res.data.data;
};
