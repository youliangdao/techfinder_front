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
import { useMutateArticleComment } from 'comments/hooks/useMutateArticleComment';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  article,
  close,
}: CommentItemProps) => {
  const navigate = useNavigate();
  const currentUser = useAppSelector(selectUser);

  const [editedFlag, setEditedFlag] = useState(false);
  const { deleteCommentMutation, updateCommentMutation } =
    useMutateArticleComment();

  const form = useForm<Form>({
    validate: zodResolver(schema),
    initialValues: {
      body: body,
    },
  });

  const deleteCommentHandler = async () => {
    deleteCommentMutation.mutate({ id, article });
  };

  return (
    <div>
      <Group position="apart">
        <Group>
          <Avatar
            src={author.image}
            alt={author.name}
            radius="xl"
            onClick={() => {
              close();
              navigate(`/users/${author.id}/all`);
            }}
          />
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
                onClick={deleteCommentHandler}
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
            updateCommentMutation.mutate({
              body: values.body,
              id: id,
              nickname: currentUser.nickname,
              avatar: currentUser.avatar,
              article,
            });
            setEditedFlag(false);
          })}
        >
          <div className="flex justify-around space-x-2">
            <TextInput
              {...form.getInputProps('body')}
              className="w-full pl-12 pt-3"
            />
            <Button.Group className="items-center pt-3">
              <Button
                size="xs"
                type="submit"
                loading={updateCommentMutation.isLoading}
              >
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
