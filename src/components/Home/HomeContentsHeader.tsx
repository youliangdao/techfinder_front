/* eslint-disable tailwindcss/no-custom-classname */
import { Container, Header, Text, useMantineTheme } from '@mantine/core';
import React from 'react';

type HomeContentsHeaderProps = {
  leftTitle: string;
  rightTitle: string;
};

const HomeContentsHeader = ({
  leftTitle,
  rightTitle,
}: HomeContentsHeaderProps) => {
  const theme = useMantineTheme();
  return (
    <Header height="50" className="bg-m_gray-0">
      <Container className="flex h-12 items-center justify-between text-sm">
        <Text className="font-bold">{leftTitle}</Text>
        <a
          href="/"
          className=" hover:bg-m_gray-0 block rounded-sm py-2 px-3 text-sm font-medium leading-none"
          onClick={(event) => event.preventDefault()}
        >
          {rightTitle}
        </a>
      </Container>
    </Header>
  );
};

export default HomeContentsHeader;
