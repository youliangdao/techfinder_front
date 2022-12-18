import { TextInput, useMantineTheme } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import React, { Dispatch, SetStateAction } from 'react';

type SearchInputProps = {
  filterInput: string;
  setFilterInput: Dispatch<SetStateAction<string>>;
};

const SearchInput = ({ filterInput, setFilterInput }: SearchInputProps) => {
  const theme = useMantineTheme();

  return (
    <TextInput
      icon={<IconSearch size={18} stroke={1.5} />}
      radius="lg"
      size="sm"
      placeholder="キーワードを入力..."
      value={filterInput}
      onChange={(e) => setFilterInput(e.target.value)}
    />
  );
};

export default SearchInput;
