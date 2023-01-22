import { Anchor, Group, Image, Modal, Stack, Text } from '@mantine/core';
import { GoogleButton } from 'components/Button/SocialButtons';
import { signInWithGoogle } from 'lib/auth/auth';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  closeLoginModal,
  selectIsLoginOpened,
} from 'store/ducks/loginModalSlice';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import logo from '/src/assets/logo3.png';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isLoginOpened = useAppSelector(selectIsLoginOpened);
  const location = useLocation();
  const fromPathName = location.pathname + location.search;

  return (
    <Modal
      opened={isLoginOpened}
      onClose={() => dispatch(closeLoginModal())}
      centered
      overlayOpacity={0.55}
      size="sm"
      classNames={{
        modal: 'pt-2',
        header: 'mb-0',
      }}
    >
      <Stack>
        {/* <MantineLogo className="h-8" /> */}
        <Image src={logo} fit="contain" height={80} />
        <Text size="sm" color="dimmed">
          TechFinderは個人開発者のための技術記事データベースです。
          目的の記事を見つけたらいいねやストックをしましょう
        </Text>
        <Group grow mb="md">
          <GoogleButton
            onClick={() => {
              dispatch(closeLoginModal());
              signInWithGoogle(navigate, dispatch, fromPathName);
            }}
            title="Login with Google"
            loading={false}
          />
          {/* <TwitterButton radius="xl">Twitter</TwitterButton> */}
        </Group>
        <Text size="sm" color="dimmed" className="px-5 text-center">
          <Anchor
            onClick={() => {
              dispatch(closeLoginModal());
              navigate('/terms');
            }}
          >
            利用規約
          </Anchor>
          、
          <Anchor
            onClick={() => {
              dispatch(closeLoginModal());
              navigate('/privacy-policy');
            }}
          >
            プライバシーポリシー
          </Anchor>
          に同意したうえでログインしてください。
        </Text>
      </Stack>
    </Modal>
  );
};

export default LoginForm;
