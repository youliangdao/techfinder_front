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
import { postComments } from 'comments/api/postComments';
import { formatDistanceToNow } from 'date-fns';
import { ja } from 'date-fns/locale';
import { getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { selectUser } from 'store/ducks/userSlice';
import { useAppSelector } from 'store/hooks';
import { z } from 'zod';

import { CommentListsProps } from '../types';
import CommentItem from './CommentItem';

const schema = z.object({
  body: z
    .string()
    .min(1, { message: 'コメントを入力してください' })
    .max(2000, { message: 'コメントは2000文字以内にしてください' }),
});

type Form = z.infer<typeof schema>;

const CommentLists = ({
  commentLists,
  articleId,
  setCommentLists,
}: CommentListsProps) => {
  const [isLoading, setIsLoding] = useState(false);
  const currentUser = useAppSelector(selectUser);
  const navigate = useNavigate();
  const location = useLocation();

  const form = useForm<Form>({
    validate: zodResolver(schema),
    initialValues: {
      body: '',
    },
  });
  return (
    <Card radius="md" withBorder className="px-0">
      <Text className="text-center text-lg font-bold">コメント一覧</Text>
      <Divider className="my-5 font-bold" />
      <Stack className="space-y-1 px-8">
        {commentLists.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            setCommentLists={setCommentLists}
          />
        ))}
        <Space h="md" />
        <form
          onSubmit={form.onSubmit(async (values) => {
            setIsLoding(true);
            try {
              const auth = getAuth();
              const idToken = await auth.currentUser?.getIdToken();

              const config = {
                headers: {
                  authorization: `Bearer ${idToken}`,
                },
              };
              const responseComment = await postComments(
                config,
                values.body,
                articleId
              );

              setCommentLists((prevComments) => {
                return [
                  ...prevComments,
                  {
                    id: responseComment.id,
                    author: {
                      name: currentUser.nickname,
                      image: currentUser.avatar,
                    },
                    body: responseComment.attributes.body,
                    postedAt: formatDistanceToNow(
                      new Date(responseComment.attributes.created_at),
                      {
                        addSuffix: true,
                        locale: ja,
                      }
                    ),
                  },
                ];
              });
              setIsLoding(false);
              form.setFieldValue('body', '');
            } catch (error: any) {
              setIsLoding(false);
              form.setFieldValue('body', '');
              alert(`コメントの投稿に失敗しました。\n${error.message}`);
            }
          })}
        >
          {currentUser.uid ? (
            <>
              <Textarea
                placeholder="コメントを書く（任意）"
                // label="Your comment"
                radius="md"
                // size="md"
                withAsterisk
                {...form.getInputProps('body')}
                className="px-5"
              />
              <Group position="right" mt="md" className="xs:px-5">
                <Button loading={isLoading} type="submit">
                  投稿する
                </Button>
              </Group>
            </>
          ) : (
            <>
              <Center className="mt-5">
                <Text color="dimmed">ログインするとコメントできます</Text>
              </Center>
              <Space h="md" />
              <Center>
                <Button
                  radius="xl"
                  className="h-8"
                  onClick={() => {
                    navigate('/login', {
                      state: {
                        from: {
                          pathname: location.pathname,
                        },
                      },
                    });
                  }}
                >
                  Login
                </Button>
              </Center>
            </>
          )}
        </form>
      </Stack>
    </Card>
  );
};

export default CommentLists;
