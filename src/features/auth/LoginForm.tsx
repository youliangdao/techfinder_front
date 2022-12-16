import { Group, Modal, Stack, Text } from '@mantine/core';
import { MantineLogo } from '@mantine/ds';
import React, { FC } from 'react';

import {
  GoogleButton,
  TwitterButton,
} from '../../components/Buttons/SocialButtons';

type LoginFormProps = {
  opened: boolean;
  setOpened: (flag: boolean) => void;
};

const LoginForm: FC<LoginFormProps> = ({ opened, setOpened }) => {
  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      centered
      overlayOpacity={0.55}
      size="md"
      classNames={{
        modal: 'pt-2',
        header: 'mb-0',
      }}
    >
      <Stack className="space-y-4">
        <MantineLogo className="h-8" />

        <Text size="sm" color="dimmed">
          StackDeveloperは個人開発者のための技術記事データベースです。お気に入りの記事を見つけたら、いいねやブックマークをしましょう
        </Text>
        <Group grow mb="md" mt="md">
          <GoogleButton radius="xl">Google</GoogleButton>
          <TwitterButton radius="xl">Twitter</TwitterButton>
        </Group>
        <Text size="sm" color="dimmed" className="px-5 text-center">
          利用規約、プライバシーポリシーに同意したうえでログインしてください。
        </Text>
      </Stack>

      {/* <Divider label="Or continue with email" labelPosition="center" my="lg" /> */}

      {/* <form onSubmit={form.onSubmit(() => {})}>
        <Stack>
          {type === 'register' && (
            <TextInput
              label="Name"
              placeholder="Your name"
              value={form.values.name}
              onChange={(event) =>
                form.setFieldValue('name', event.currentTarget.value)
              }
            />
          )}

          <TextInput
            required
            label="Email"
            placeholder="hello@mantine.dev"
            value={form.values.email}
            onChange={(event) =>
              form.setFieldValue('email', event.currentTarget.value)
            }
            error={form.errors.email && 'Invalid email'}
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) =>
              form.setFieldValue('password', event.currentTarget.value)
            }
            error={
              form.errors.password &&
              'Password should include at least 6 characters'
            }
          />

          {type === 'register' && (
            <Checkbox
              label="I accept terms and conditions"
              checked={form.values.terms}
              onChange={(event) =>
                form.setFieldValue('terms', event.currentTarget.checked)
              }
            />
          )}
        </Stack>

        <Group position="apart" mt="xl">
          <Anchor
            component="button"
            type="button"
            color="dimmed"
            onClick={() => toggle()}
            size="xs"
          >
            {type === 'register'
              ? 'Already have an account? Login'
              : "Don't have an account? Register"}
          </Anchor>
          <Button type="submit">{upperFirst(type)}</Button>
        </Group>
      </form> */}
    </Modal>
  );
};

export default LoginForm;
