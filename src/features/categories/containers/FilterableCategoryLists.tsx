import axios from 'axios';
import { Category, ResponseCategoryType } from 'categories/types';
import { endpoint } from 'config';
import React, { useEffect, useState } from 'react';

import SearchInput from '../../../components/SearchInput';
import CategoryLists from '../components/CategoryLists';

const FilterableCategoryLists = () => {
  const [filterInput, setFilterInput] = useState<string>('');
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get<ResponseCategoryType>(
        `${endpoint}/categories`
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

  return (
    <>
      <SearchInput {...{ filterInput, setFilterInput }} />
      <br />
      <CategoryLists {...{ filterInput, categories }} />
    </>
  );
};

export default FilterableCategoryLists;
