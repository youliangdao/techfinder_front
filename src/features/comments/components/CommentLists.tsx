import {
  Button,
  Card,
  Center,
  Divider,
  Group,
  Space,
  Stack,
  Text,
  Textarea,
} from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { useMutateArticleComment } from 'comments/hooks/useMutateArticleComment';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { selectUser } from 'store/ducks/userSlice';
import { useAppSelector } from 'store/hooks';
import { z } from 'zod';

import { ReactComponent as DiscussionSVG } from '/public/Discussion-rafiki.svg';

import { CommentListsProps } from '../types';
import CommentItem from './CommentItem';

const schema = z.object({
  body: z
    .string()
    .min(1, { message: 'コメントを入力してください' })
    .max(2000, { message: 'コメントは2000文字以内にしてください' }),
});

type Form = z.infer<typeof schema>;

const CommentLists = ({ commentLists, article, close }: CommentListsProps) => {
  const currentUser = useAppSelector(selectUser);
  const navigate = useNavigate();
  const location = useLocation();
  const { createCommentMutation } = useMutateArticleComment();

  const fromPathName = location.pathname + location.search;

  const form = useForm<Form>({
    validate: zodResolver(schema),
    initialValues: {
      body: '',
    },
  });

  return (
    <Card radius="md" withBorder className="px-0">
      <Text className="text-center text-lg font-bold">コメント一覧</Text>
      {commentLists.length !== 0 && <Divider className="my-5 font-bold" />}
      <Stack className="space-y-1 px-2 sm:px-8">
        {commentLists.length === 0 ? (
          <DiscussionSVG className="h-80 object-contain" />
        ) : (
          commentLists.map((comment) => (
            <CommentItem
              key={comment.id}
              comment={comment}
              article={article}
              close={close}
            />
          ))
        )}
        <Space h="md" />
        {currentUser.uid ? (
          <form
            onSubmit={form.onSubmit(async (values) => {
              createCommentMutation.mutate({
                article: article,
                body: values.body,
                nickname: currentUser.nickname,
                avatar: currentUser.avatar,
              });
              form.setFieldValue('body', '');
            })}
          >
            <Textarea
              placeholder="コメントを書く（任意）"
              radius="md"
              withAsterisk
              {...form.getInputProps('body')}
              className="sm:px-5"
            />
            <Group position="right" mt="md" className="xs:px-5">
              <Button loading={createCommentMutation.isLoading} type="submit">
                投稿する
              </Button>
            </Group>
          </form>
        ) : (
          <>
            <Center className="mt-5">
              <Text color="dimmed">ログインするとコメントできます</Text>
            </Center>
            <Center>
              <Button
                radius="xl"
                className="h-8"
                onClick={() => {
                  navigate('/login', {
                    state: {
                      from: {
                        pathname: fromPathName,
                      },
                    },
                  });
                }}
              >
                ログイン
              </Button>
            </Center>
          </>
        )}
      </Stack>
    </Card>
  );
};

export default CommentLists;
