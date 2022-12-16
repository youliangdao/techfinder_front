import {
  Avatar,
  Box,
  Button,
  FileButton,
  Group,
  Stack,
  Textarea,
  TextInput,
} from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import React, { useState } from 'react';
import { z } from 'zod';

import { useMediaQuery } from '../../lib/mantine/useMediaQuery';

const schema = z.object({
  nickname: z.string().trim().min(1, { message: 'ニックネームは必須です' }),
  twitterUsername: z.string(),
  githubUsername: z.string(),
  description: z.string(),
});

type Form = z.infer<typeof schema>;

const ProfileForm = () => {
  const largerThanXs = useMediaQuery('xs');
  const largerThanSm = useMediaQuery('sm');
  const largerThanMd = useMediaQuery('md');
  const largerThanLg = useMediaQuery('lg');
  const largerThanXl = useMediaQuery('xl');
  const form = useForm<Form>({
    validate: zodResolver(schema),
    initialValues: {
      nickname: '',
      twitterUsername: '',
      githubUsername: '',
      description: '',
    },
  });
  const [file, setFile] = useState<File | null>(null);
  return (
    <Box sx={{ maxWidth: 500 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values, file))}>
        <Stack spacing="lg">
          <Group position="left">
            {largerThanSm ? (
              <Avatar src="/src/assets/avatar.png" size={120} />
            ) : (
              <Avatar src="/src/assets/avatar.png" size="xl" />
            )}
            <FileButton
              onChange={setFile}
              accept="image/png,image/jpeg"
              variant="outline"
            >
              {(props) => <Button {...props}>画像をアップロード</Button>}
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
