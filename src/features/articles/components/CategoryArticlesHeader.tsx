/* eslint-disable react/no-unescaped-entities */
import { Group, Text } from '@mantine/core';
import React from 'react';

type CategoryArticlesHeaderProps = {
  category: string;
  Icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
};

const CategoryArticlesHeader = ({
  category,
  Icon,
}: CategoryArticlesHeaderProps) => {
  return (
    <Group spacing="lg" className="xs:px-3 sm:px-5">
      <Icon className="h-20 sm:h-24" />
      <Text className="font-bold sm:text-2xl">"{category}"に関する記事</Text>
    </Group>
  );
};

export default CategoryArticlesHeader;
