import React from 'react';
import { Helmet } from 'react-helmet-async';

type HeadProps = {
  title?: string;
  description?: string;
};

export const Head = ({ title = '', description = '' }: HeadProps = {}) => {
  return (
    <Helmet
      title={title ? `${title} | TechFinder` : undefined}
      defaultTitle="TechFinder | 個人開発者のための技術記事データベース"
    >
      <meta name="description" content={description} />
    </Helmet>
  );
};
