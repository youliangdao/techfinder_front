import { TextInput, TextInputProps, useMantineTheme } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import React from 'react';

const SearchInput = (props: TextInputProps) => {
  const theme = useMantineTheme();

  return (
    <TextInput
      icon={<IconSearch size={18} stroke={1.5} />}
      radius="xl"
      size="md"
      placeholder="キーワードを入力..."
      {...props}
    />
  );
};

export default SearchInput;
