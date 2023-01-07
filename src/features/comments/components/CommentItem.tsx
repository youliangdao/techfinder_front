import {
  Avatar,
  Button,
  Divider,
  Group,
  Menu,
  Space,
  Text,
  TextInput,
} from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { IconChevronDown, IconEdit, IconTrash } from '@tabler/icons';
import { deleteComment } from 'comments/api/deleteComment';
import { updateComment } from 'comments/api/updateComment';
import { formatDistanceToNow } from 'date-fns';
import { ja } from 'date-fns/locale';
import { getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { selectUser } from 'store/ducks/userSlice';
import { useAppSelector } from 'store/hooks';
import { z } from 'zod';

import { CommentItemProps } from '../types';

const schema = z.object({
  body: z
    .string()
    .min(1, { message: 'コメントを入力してください' })
    .max(2000, { message: 'コメントは2000文字以内にしてください' }),
});

type Form = z.infer<typeof schema>;

const CommentItem = ({
  comment: { id, postedAt, body, author },
  setCommentLists,
}: CommentItemProps) => {
  const currentUser = useAppSelector(selectUser);

  const [editedFlag, setEditedFlag] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<Form>({
    validate: zodResolver(schema),
    initialValues: {
      body: body,
    },
  });

  const deleteCommentHandler = async (id: string) => {
    confirm('コメントを削除してよろしいですか？');
    try {
      const auth = getAuth();
      const idToken = await auth.currentUser?.getIdToken();

      const config = {
        headers: {
          authorization: `Bearer ${idToken}`,
        },
      };
      await deleteComment(config, id);
      setCommentLists((prevCommentLists) =>
        prevCommentLists.filter((comment) => comment.id !== id)
      );
    } catch (error: any) {
      alert(`コメント削除に失敗しました。\n${error.message}`);
    }
  };

  return (
    <div>
      <Group position="apart">
        <Group>
          <Avatar src={author.image} alt={author.name} radius="xl" />
          <div>
            <Text size="sm">{author.name}</Text>
            <Text size="xs" color="dimmed">
              {postedAt}
            </Text>
          </div>
        </Group>
        {currentUser.nickname === author.name && !editedFlag && (
          <Menu shadow="md" width={150}>
            <Menu.Target>
              <div
                // eslint-disable-next-line tailwindcss/no-custom-classname
                className="text-m_gray-7  hover:bg-m_gray-0 block rounded-sm py-2 px-3 text-sm font-medium leading-none no-underline"
              >
                <IconChevronDown size={12} stroke={1.5} />
              </div>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item
                icon={<IconEdit size={14} />}
                onClick={() => setEditedFlag(true)}
              >
                編集
              </Menu.Item>
              <Menu.Item
                color="red"
                icon={<IconTrash size={14} />}
                onClick={() => deleteCommentHandler(id)}
              >
                削除
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        )}
      </Group>
      {editedFlag ? (
        <form
          onSubmit={form.onSubmit(async (values) => {
            setIsLoading(true);
            try {
              const auth = getAuth();
              const idToken = await auth.currentUser?.getIdToken();

              const config = {
                headers: {
                  authorization: `Bearer ${idToken}`,
                },
              };
              const data = await updateComment(config, id, values.body);
              setCommentLists((prevCommentLists) =>
                prevCommentLists.map((comment) => {
                  if (comment.id === id) {
                    return {
                      id: id,
                      author: {
                        name: currentUser.nickname,
                        image: currentUser.avatar,
                      },
                      body: data.data.attributes.body,
                      postedAt: formatDistanceToNow(
                        new Date(data.data.attributes.created_at),
                        {
                          addSuffix: true,
                          locale: ja,
                        }
                      ),
                    };
                  }
                  return comment;
                })
              );
              setEditedFlag(false);
              setIsLoading(false);
            } catch (error: any) {
              setEditedFlag(false);
              setIsLoading(false);

              alert(`コメント更新に失敗しました。\n${error.message}`);
            }
          })}
        >
          <div className="flex justify-around space-x-2">
            <TextInput
              {...form.getInputProps('body')}
              className="w-full pl-12 pt-3"
            />
            <Button.Group className="items-center pt-3">
              <Button size="xs" type="submit" loading={isLoading}>
                編集
              </Button>
              <Button
                variant="subtle"
                size="xs"
                onClick={() => {
                  setEditedFlag(false);
                  form.setValues({
                    body: body,
                  });
                }}
              >
                キャンセル
              </Button>
            </Button.Group>
          </div>
        </form>
      ) : (
        <Text className="pl-12 pt-3" size="sm">
          {form.values.body}
        </Text>
      )}
      <Space h="md" />
      <Divider />
    </div>
  );
};

export default CommentItem;
