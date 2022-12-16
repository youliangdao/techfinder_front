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

import CommentItem from './CommentItem';

const commentLists = [
  {
    postedAt: '10 minutes ago',
    body: 'This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill. ',
    author: {
      name: 'Jacob Warnhalter',
      image:
        'https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    },
  },
  {
    postedAt: '11 minutes ago',
    body: 'This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill. Blastoise has water spouts that protrude from its shell. The water spouts are very accurate.',
    author: {
      name: 'Jacob Warnhalter',
      image:
        'https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    },
  },
  {
    postedAt: '12 minutes ago',
    body: 'This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill.',
    author: {
      name: 'Jacob Warnhalter',
      image:
        'https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    },
  },
];

const CommentLists = () => {
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
