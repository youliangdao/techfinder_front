import axios, { AxiosResponse } from 'axios';
import { Category, ResponseCategoryType } from 'categories/types';
import { endpoint } from 'config';
import React, { useEffect, useState } from 'react';

import PopularCategoryLists from '../components/PopularCategoryLists';

const PopularCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const res: AxiosResponse<ResponseCategoryType> = await axios.get(
        `${endpoint}/categories/popular`
      );
      return res.data.data;
    };
    fetchCategories().then((data) => {
      const newCategories = data.map((category) => ({
        id: category.id,
        title: category.attributes.name,
        image: category.attributes.image,
        path: category.attributes.path,
      }));
      setCategories(newCategories);
    });
  }, []);
  return <PopularCategoryLists categories={categories} />;
};

export default PopularCategories;
