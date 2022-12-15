import { Container } from '@mantine/core';
import React from 'react';

import PopularCategoryItems from '../categories/PopularCategoryItems';

const PopularCategories = () => {
  return (
    <Container>
      <PopularCategoryItems />
    </Container>
  );
};

export default PopularCategories;
