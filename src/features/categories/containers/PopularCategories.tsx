import axios, { AxiosResponse } from 'axios';
import { Category } from 'categories/types';
import { endpoint } from 'config';
import React, { useEffect, useState } from 'react';

import PopularCategoryLists from '../components/PopularCategoryLists';

const PopularCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const res: AxiosResponse<Category[]> = await axios.get(
        `${endpoint}/category/popular`
      );
      return res.data;
    };
    fetchCategories().then((data) => setCategories(data));
  }, []);
  return <PopularCategoryLists categories={categories} />;
};

export default PopularCategories;
