import { Group, Modal, Stack, Text } from '@mantine/core';
import { MantineLogo } from '@mantine/ds';
import { GoogleButton } from 'components/Button/SocialButtons';
import { auth, provider } from 'firebase';
import { getAdditionalUserInfo, signInWithPopup } from 'firebase/auth';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

type LoginFormProps = {
  opened: boolean;
  setOpened: (flag: boolean) => void;
};

const LoginForm: FC<LoginFormProps> = ({ opened, setOpened }) => {
  const navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setOpened(false);
        if (getAdditionalUserInfo(result)?.isNewUser) {
          navigate('/onboarding');
          return;
        }
        navigate('/');
      })
      .catch((error) => {
        setOpened(false);
        if (error.code === 'auth/account-exists-with-different-credential') {
          alert(
            `${error.customData.email}は他のSNSと連携した既存ユーザーが登録済みです。既存ユーザーでログイン後、こちらのSNSとの連携が可能です`
          );
          return;
        }
        alert(`ログイン/新規登録に失敗しました。\n${error.message}`);
      });
  };
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
          <GoogleButton onClick={signInWithGoogle} title="Login with Google" />
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
