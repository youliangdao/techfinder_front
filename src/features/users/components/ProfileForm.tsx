import {
  Box,
  Button,
  FileButton,
  Group,
  Space,
  Stack,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { showNotification } from '@mantine/notifications';
import { IconCheck } from '@tabler/icons';
import ImagePreview from 'auth/components/ImagePreview';
import { useMediaQuery } from 'lib/mantine/useMediaQuery';
import React, { useCallback, useEffect, useState } from 'react';
import { selectUser, updateUserProfile } from 'store/ducks/userSlice';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { z } from 'zod';

import { User } from '../types';

const schema = z.object({
  nickname: z
    .string()
    .trim()
    .min(1, { message: 'ニックネームは必須です' })
    .max(40, { message: 'ニックネームは40字以内にしてください' }),
  twitterUsername: z.string(),
  githubUsername: z.string(),
  description: z
    .string()
    .max(160, { message: '自己紹介は160字以内にしてください' }),
});

type Form = z.infer<typeof schema>;

const ProfileForm = ({
  nickname,
  twitterUsername,
  githubUsername,
  description,
  avatar,
}: User) => {
  const largerThanSm = useMediaQuery('sm');
  const form = useForm<Form>({
    validate: zodResolver(schema),
    initialValues: {
      nickname,
      twitterUsername,
      githubUsername,
      description,
    },
    validateInputOnBlur: true,
  });
  const [file, setFile] = useState<File | null>(null);
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const [imageURL, setImageURL] = useState(user.avatar);

  const changeFileHandler = useCallback((payload: File | null) => {
    if (payload) {
      setFile(payload);
    }
  }, []);

  useEffect(() => {
    setImageURL(user.avatar);
    return () => {
      setImageURL('');
    };
  }, [user]);

  return (
    <Box sx={{ maxWidth: 500 }} mx="auto">
      <Title className="max-sm:text-xl sm:text-3xl">プロフィール</Title>
      <Space h={40} />
      <form
        onSubmit={form.onSubmit((values) => {
          showNotification({
            message: '更新しました！',
            icon: <IconCheck />,
            styles: (theme) => ({
              root: {
                backgroundColor: theme.colors.dark,
              },
              description: { color: theme.white },
            }),
          });
          dispatch(
            updateUserProfile({
              nickname: values.nickname,
              description: values.description,
              avatar: imageURL,
            })
          );
        })}
      >
        <Stack spacing="lg">
          <Group position="left">
            {largerThanSm ? (
              <ImagePreview
                file={file}
                imageURL={imageURL}
                setImageURL={setImageURL}
                size={120}
              />
            ) : (
              <ImagePreview
                file={file}
                imageURL={imageURL}
                setImageURL={setImageURL}
                size={84}
              />
            )}
            <FileButton
              onChange={changeFileHandler}
              accept="image/png,image/jpeg"
            >
              {(props) => (
                <Button variant="outline" {...props}>
                  画像をアップロード
                </Button>
              )}
            </FileButton>
          </Group>
          <TextInput
            withAsterisk
            label="ニックネーム"
            placeholder="表示名を入力"
            {...form.getInputProps('nickname')}
          />
          <Textarea
            label="自己紹介"
            placeholder="自己紹介を入力"
            {...form.getInputProps('description')}
          />
          <TextInput
            label="GitHubユーザー名"
            placeholder="ユーザー名のみを入力"
            {...form.getInputProps('githubUsername')}
          />
          <TextInput
            label="Twitterユーザー名"
            placeholder="@なしで入力"
            {...form.getInputProps('twitterUsername')}
          />
        </Stack>
        <Group position="center" className="mt-10">
          <Button type="submit" radius="xl" size="md">
            更新する
          </Button>
        </Group>
      </form>
    </Box>
  );
};

export default ProfileForm;
