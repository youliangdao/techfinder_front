import {
  Box,
  Button,
  FileButton,
  Group,
  Space,
  Stack,
  Text,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';
import { GithubIcon, TwitterIcon } from '@mantine/ds';
import { useForm, zodResolver } from '@mantine/form';
import { showNotification } from '@mantine/notifications';
import { IconCheck } from '@tabler/icons';
import ImagePreview from 'auth/components/ImagePreview';
import { getAuth } from 'firebase/auth';
import { postImage } from 'lib/auth/api/postImage';
import { useMediaQuery } from 'lib/mantine/useMediaQuery';
import React, { useCallback, useEffect, useState } from 'react';
import { selectUser, updateUserProfile } from 'store/ducks/userSlice';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getAvatar } from 'users/api/getAvatar';
import { patchProfile } from 'users/api/patchProfile';
import { z } from 'zod';

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

const ProfileForm = () => {
  const user = useAppSelector(selectUser);

  const largerThanSm = useMediaQuery('sm');
  const largerThanXs = useMediaQuery('xs');
  const form = useForm<Form>({
    validate: zodResolver(schema),
    initialValues: {
      nickname: user.nickname,
      twitterUsername: user.twitterUsername,
      githubUsername: user.githubUsername,
      description: user.description,
    },
    validateInputOnBlur: true,
  });
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoding] = useState(false);
  const dispatch = useAppDispatch();
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
    <Box sx={{ maxWidth: 700 }} mx="auto">
      <Title className="max-sm:text-xl sm:text-3xl">プロフィール</Title>
      <Space h={40} />
      <form
        onSubmit={form.onSubmit(async (values) => {
          setIsLoding(true);
          try {
            const auth = getAuth();
            const idToken = await auth.currentUser?.getIdToken(true);
            const config = {
              headers: {
                authorization: `Bearer ${idToken}`,
              },
            };
            if (file) {
              const key = await postImage(file, config);
              await patchProfile(
                values.nickname,
                values.description,
                values.githubUsername,
                values.twitterUsername,
                key,
                config
              );
              const avatarImageUrl = await getAvatar(config);

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
                  avatar: avatarImageUrl,
                  avatarKey: key || '',
                  githubUsername: values.githubUsername,
                  twitterUsername: values.twitterUsername,
                })
              );
              setIsLoding(false);
            } else {
              const key = user.avatarKey;
              await patchProfile(
                values.nickname,
                values.description,
                values.githubUsername,
                values.twitterUsername,
                key,
                config
              );
              if (user.avatarKey) {
                const avatarImageUrl = await getAvatar(config);
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
                    avatar: avatarImageUrl,
                    avatarKey: key || '',
                    githubUsername: values.githubUsername,
                    twitterUsername: values.twitterUsername,
                  })
                );
              } else {
                const avatarImageUrl = user.avatar;
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
                    avatar: avatarImageUrl,
                    avatarKey: key || '',
                    githubUsername: values.githubUsername,
                    twitterUsername: values.twitterUsername,
                  })
                );
              }
              setIsLoding(false);
            }
          } catch (error: any) {
            setIsLoding(false);
            alert(`プロフィール編集に失敗しました。\n${error.message}`);
          }
        })}
      >
        {largerThanXs ? (
          <div className="flex space-x-10">
            <Stack spacing="xs">
              <ImagePreview
                file={file}
                imageURL={imageURL}
                setImageURL={setImageURL}
                size={120}
              />
              <FileButton
                onChange={changeFileHandler}
                accept="image/png,image/jpeg"
              >
                {(props) => (
                  <Button color="gray" variant="subtle" {...props}>
                    変更する
                  </Button>
                )}
              </FileButton>
            </Stack>
            <Stack spacing="lg" className="w-full">
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
              <Group>
                <div className="grow">
                  <Group spacing="xs" mb={5}>
                    <GithubIcon size={18} />
                    <Text
                      size="sm"
                      weight={500}
                      component="label"
                      htmlFor="github-username"
                    >
                      GitHubユーザー名
                    </Text>
                  </Group>
                  <TextInput
                    placeholder="ユーザー名のみを入力"
                    id="github-username"
                    {...form.getInputProps('githubUsername')}
                  />
                </div>
                <div className="grow">
                  <Group spacing="xs" mb={5}>
                    <TwitterIcon size={18} color="#00ACEE" />
                    <Text
                      size="sm"
                      weight={500}
                      component="label"
                      htmlFor="twitter-username"
                    >
                      Twitterユーザー名
                    </Text>
                  </Group>
                  <TextInput
                    placeholder="@なしで入力"
                    id="twitter-username"
                    {...form.getInputProps('twitterUsername')}
                  />
                </div>
              </Group>
              <Group position="center" className="mt-5">
                <Button type="submit" radius="xl" size="md" loading={isLoading}>
                  更新する
                </Button>
              </Group>
            </Stack>
          </div>
        ) : (
          <div>
            <ImagePreview
              file={file}
              imageURL={imageURL}
              setImageURL={setImageURL}
              size={100}
            />
            <FileButton
              onChange={changeFileHandler}
              accept="image/png,image/jpeg"
            >
              {(props) => (
                <Button color="gray" variant="subtle" {...props}>
                  変更する
                </Button>
              )}
            </FileButton>
            <Space h="xl" />
            <Stack spacing="lg" className="w-full">
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
              <Group>
                <div className="grow">
                  <Group spacing="xs" mb={5}>
                    <GithubIcon size={18} />
                    <Text
                      size="sm"
                      weight={500}
                      component="label"
                      htmlFor="github-username"
                    >
                      GitHubユーザー名
                    </Text>
                  </Group>
                  <TextInput
                    placeholder="ユーザー名のみを入力"
                    id="github-username"
                    {...form.getInputProps('githubUsername')}
                  />
                </div>
                <div className="grow">
                  <Group spacing="xs" mb={5}>
                    <TwitterIcon size={18} color="#00ACEE" />
                    <Text
                      size="sm"
                      weight={500}
                      component="label"
                      htmlFor="twitter-username"
                    >
                      Twitterユーザー名
                    </Text>
                  </Group>
                  <TextInput
                    placeholder="@なしで入力"
                    id="twitter-username"
                    {...form.getInputProps('twitterUsername')}
                  />
                </div>
              </Group>
              <Group position="center" className="mt-5">
                <Button type="submit" radius="xl" size="md" loading={isLoading}>
                  更新する
                </Button>
              </Group>
            </Stack>
          </div>
        )}
      </form>
    </Box>
  );
};

export default ProfileForm;
