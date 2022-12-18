import {
  Avatar,
  Button,
  Container,
  FileButton,
  Group,
  Paper,
  Space,
  Stack,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import React, { useState } from 'react';
import { z } from 'zod';

import avatar from '/src/assets/avatar.png';

const schema = z.object({
  nickname: z.string().trim().min(1, { message: 'ニックネームは必須です' }),
  description: z.string(),
});

type Form = z.infer<typeof schema>;

const RegisterForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const form = useForm<Form>({
    validate: zodResolver(schema),
    initialValues: {
      nickname: '',
      description: '',
    },
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
        Welcome to StackDeveloper!
      </Title>
      <Space h={50} />
      <Paper shadow="md" withBorder p={30} radius="md">
        <form onSubmit={form.onSubmit((values) => console.log(values, file))}>
          <Stack spacing="lg">
            <Group>
              <Avatar src={avatar} size={150} className="mx-auto" />
              <FileButton onChange={setFile} accept="image/png,image/jpeg">
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
