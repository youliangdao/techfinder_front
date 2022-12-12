/* eslint-disable tailwindcss/no-custom-classname */
import { Container, Header } from '@mantine/core';
import React from 'react';

type ArticleItemsGenreHeaderProps = {
  genres: string[];
};

const ArticleItemsGenreHeader = (props: ArticleItemsGenreHeaderProps) => {
  return (
    <Header height="50">
      <Container className="flex h-12 items-center justify-around">
        {props.genres.map((genre) => (
          <div
            key={genre}
            className="hover:bg-m_gray-1 font-bold hover:cursor-pointer"
          >
            {genre}
          </div>
        ))}
      </Container>
    </Header>
  );
};

export default ArticleItemsGenreHeader;
