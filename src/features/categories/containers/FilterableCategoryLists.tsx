import axios, { AxiosResponse } from 'axios';
import { Category } from 'categories/types';
import { endpoint } from 'config';
import React, { useEffect, useState } from 'react';

import SearchInput from '../../../components/SearchInput';
import CategoryLists from '../components/CategoryLists';

const FilterableCategoryLists = () => {
  const [filterInput, setFilterInput] = useState<string>('');
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res: AxiosResponse<Category[]> = await axios.get(
        `${endpoint}/categories`
      );
      return res.data;
    };
    fetchCategories().then((data) => setCategories(data));
  }, []);

  return (
    <>
      <SearchInput {...{ filterInput, setFilterInput }} />
      <br />
      <CategoryLists categories={categories} />
    </>
  );
};

export default FilterableCategoryLists;
