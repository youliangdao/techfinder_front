import {
  Button,
  Container,
  FileButton,
  Group,
  LoadingOverlay,
  Paper,
  Space,
  Stack,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { getAuth } from 'firebase/auth';
import { postImage } from 'lib/auth/api/postImage';
import React, { useCallback, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { selectUser, updateUserProfile } from 'store/ducks/userSlice';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getAvatar } from 'users/api/getAvatar';
import { patchProfile } from 'users/api/patchProfile';
import { z } from 'zod';

import ImagePreview from './ImagePreview';

const schema = z.object({
  nickname: z
    .string()
    .trim()
    .min(1, { message: 'ニックネームは必須です' })
    .max(40, { message: 'ニックネームは40字以内にしてください' }),
  description: z
    .string()
    .max(160, { message: '自己紹介は160字以内にしてください' }),
});

type Form = z.infer<typeof schema>;

const RegisterForm = () => {
  const user = useAppSelector(selectUser);
  const [imageURL, setImageURL] = useState(user.avatar);
  const [file, setFile] = useState<File | null>(null);
  const [visible, setVisible] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const fromPathName = location.state.from.pathname;

  const changeFileHandler = useCallback((payload: File | null) => {
    if (payload) {
      setFile(payload);
    }
  }, []);

  const form = useForm<Form>({
    validate: zodResolver(schema),
    initialValues: {
      nickname: '',
      description: '',
    },
    validateInputOnBlur: true,
  });
  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        Welcome to TechFinder!
      </Title>
      <Space h={50} />
      <Paper shadow="md" withBorder p={30} radius="md">
        <Title order={3} align="center">
          プロフィールを入力してください
        </Title>
        <Space h={30} />

        <form
          onSubmit={form.onSubmit(async (values) => {
            setVisible(true);
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
                const user = await patchProfile(
                  values.nickname,
                  values.description,
                  '',
                  '',
                  key,
                  config
                );

                const avatarImageUrl = await getAvatar(config);

                dispatch(
                  updateUserProfile({
                    nickname: values.nickname,
                    description: values.description,
                    avatar: avatarImageUrl,
                    avatarKey: key || '',
                    twitterUsername: '',
                    githubUsername: '',
                  })
                );
                setVisible(false);
                navigate(fromPathName);
              } else {
                const res = await fetch(user.avatar);
                const blob = await res.blob();
                const file = new File([blob], 'image.jpg');
                const key = await postImage(file, config);

                await patchProfile(
                  values.nickname,
                  values.description,
                  '',
                  '',
                  key,
                  config
                );
                const avatarImageUrl = await getAvatar(config);
                dispatch(
                  updateUserProfile({
                    nickname: values.nickname,
                    description: values.description,
                    avatar: avatarImageUrl,
                    avatarKey: key || '',
                    githubUsername: '',
                    twitterUsername: '',
                  })
                );
                setVisible(false);
                navigate(fromPathName);
              }
            } catch (error: any) {
              setVisible(false);
              alert(`ユーザー登録に失敗しました。\n${error.message}`);
            }
          })}
        >
          <LoadingOverlay visible={visible} overlayBlur={2} />
          <Stack spacing="lg">
            <Group>
              <ImagePreview
                file={file}
                imageURL={imageURL}
                setImageURL={setImageURL}
                size={150}
              />
              <FileButton
                onChange={changeFileHandler}
                accept="image/png,image/jpeg"
              >
                {(props) => (
                  <Button
                    variant="outline"
                    {...props}
                    className="max-xs:mx-auto"
                  >
                    画像をアップロード
                  </Button>
                )}
              </FileButton>
            </Group>
            <TextInput
              label="ニックネーム"
              placeholder="表示名を入力してください"
              withAsterisk
              {...form.getInputProps('nickname')}
            />
            <Textarea
              label="自己紹介"
              placeholder="自己紹介を入力"
              {...form.getInputProps('description')}
            />
          </Stack>
          <Space h={30} />
          <Button type="submit" fullWidth mt="xl">
            はじめる
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default RegisterForm;
