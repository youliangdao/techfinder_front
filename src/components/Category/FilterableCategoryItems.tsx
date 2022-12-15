import { Container } from '@mantine/core';
import React from 'react';

import SearchInput from '../SearchInput';
import CategoryItems from './CategoryItems';

const FilterableCategoryItems = () => {
  return (
    <Container className="py-10">
      <SearchInput />
      <br />
      <CategoryItems />
    </Container>
  );
};

export default FilterableCategoryItems;
