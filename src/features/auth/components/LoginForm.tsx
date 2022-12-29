import { Group, Modal, Stack, Text } from '@mantine/core';
import { MantineLogo } from '@mantine/ds';
import { GoogleButton } from 'components/Button/SocialButtons';
import { signInWithGoogle } from 'lib/auth/auth';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'store/hooks';

type LoginFormProps = {
  opened: boolean;
  setOpened: (flag: boolean) => void;
};

const LoginForm: FC<LoginFormProps> = ({ opened, setOpened }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
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
          <GoogleButton
            onClick={() => signInWithGoogle(setOpened, navigate, dispatch)}
            title="Login with Google"
          />
          {/* <TwitterButton radius="xl">Twitter</TwitterButton> */}
        </Group>
        <Text size="sm" color="dimmed" className="px-5 text-center">
          利用規約、プライバシーポリシーに同意したうえでログインしてください。
        </Text>
      </Stack>
    </Modal>
  );
};

export default LoginForm;
