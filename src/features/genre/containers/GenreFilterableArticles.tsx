import { Head } from 'components/Head/Head';
import NotFoundTitle from 'components/NotFoundTitle';
import GenreArticleLists from 'features/genre/components/GenreArticleLists';
import React from 'react';
import { useParams } from 'react-router-dom';

import { genreTable } from '../config';

const GenreFilterableArticles = () => {
  const params = useParams();
  const genreFlag = Array.from(genreTable.keys()).includes(params.genre || '');

  if (genreFlag) {
    return (
      <>
        <Head title={`${genreTable.get(params.genre || '')}に関する記事一覧`} />
        <GenreArticleLists />
      </>
    );
  }
  return <NotFoundTitle />;
};

export default GenreFilterableArticles;
