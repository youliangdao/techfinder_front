import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import { useQueryArticles } from 'articles/hooks/useQueryArticles';
import NotFoundTitle from 'components/NotFoundTitle';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import ArticleLists from '../components/ArticleLists';

const FilterableArticles = () => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const { status, articleItems, params } = useQueryArticles();
  if (params.tab === 'all' || params.tab === 'popular') {
    return (
      <>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (inputRef.current?.value) {
              navigate(
                `/articles/${params.tab}/search?q=${inputRef.current?.value}`
              );
            } else {
              navigate(`/articles/${params.tab}`);
            }
          }}
        >
          <TextInput
            icon={<IconSearch size={18} stroke={1.5} />}
            radius="lg"
            size="sm"
            placeholder="キーワードを入力..."
            ref={inputRef}
          />
        </form>
        <br />
        <ArticleLists
          leftGenre="すべての記事"
          rightGenre="人気記事"
          articleItems={articleItems ? articleItems : []}
          isLoading={status === 'loading'}
        />
      </>
    );
  }
  return <NotFoundTitle />;
};

export default FilterableArticles;
