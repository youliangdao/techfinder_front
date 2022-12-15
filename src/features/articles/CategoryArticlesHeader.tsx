/* eslint-disable react/no-unescaped-entities */
import { Group, Text } from '@mantine/core';
import React from 'react';

import { ReactComponent as RailsSVG } from '/src/rubyonrails.svg';

const CategoryArticlesHeader = () => {
  return (
    <Group spacing="lg" className="xs:px-3 sm:px-5">
      <RailsSVG className="h-20 sm:h-24" />
      <Text className="font-bold sm:text-2xl">"Ruby on Rails"に関する記事</Text>
    </Group>
  );
};

export default CategoryArticlesHeader;
