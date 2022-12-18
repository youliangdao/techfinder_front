import {
  Button,
  Card,
  Divider,
  Group,
  Space,
  Stack,
  Text,
  Textarea,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import React from 'react';

import { CommentListsProps } from '../types';
import CommentItem from './CommentItem';

const CommentLists = ({ commentLists }: CommentListsProps) => {
  const form = useForm({
    initialValues: {
      comment: '',
    },

    validate: {
      comment: (value) =>
        value.length < 3 ? '3文字以上入力してください' : null,
    },
  });
  return (
    <Card radius="md" withBorder>
      <Text className="xs:text-xl text-center text-lg font-bold">
        コメント一覧
      </Text>
      <Space className="xs:h-10 h-5" />
      <Stack className="xs:space-y-5 xs:px-10 space-y-3 sm:px-20">
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Textarea
            placeholder="コメントを書く（任意）"
            label="Your comment"
            radius="md"
            size="md"
            withAsterisk
            {...form.getInputProps('comment')}
            className="xs:px-5"
          />
          <Group position="right" mt="md" className="xs:px-5">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
        <Divider my="sm" />
        {commentLists.map((comment) => (
          <CommentItem key={comment.postedAt} {...comment} />
        ))}
      </Stack>
    </Card>
  );
};

export default CommentLists;
