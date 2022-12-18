import { ActionIcon, Button, ButtonProps, Group } from '@mantine/core';
import { GithubIcon, TwitterIcon } from '@mantine/ds';
import React from 'react';

import { ReactComponent as GoogleIcon } from '/src/assets/google.svg';

export function GoogleButton(props: ButtonProps) {
  return (
    <Button
      leftIcon={
        <ActionIcon size="xs">
          <GoogleIcon />
        </ActionIcon>
      }
      variant="default"
      color="gray"
      {...props}
    />
  );
}

// Twitter button as anchor
export function TwitterButton(
  props: ButtonProps & React.ComponentPropsWithoutRef<'a'>
) {
  return (
    <Button
      component="a"
      leftIcon={<TwitterIcon size={16} color="#00ACEE" />}
      variant="default"
      {...props}
    />
  );
}

export function GithubButton(props: ButtonProps) {
  return (
    <Button
      {...props}
      leftIcon={<GithubIcon size={16} />}
      sx={(theme) => ({
        backgroundColor:
          theme.colors.dark[theme.colorScheme === 'dark' ? 9 : 6],
        color: '#fff',
        '&:hover': {
          backgroundColor:
            theme.colors.dark[theme.colorScheme === 'dark' ? 9 : 6],
        },
      })}
    />
  );
}

export function SocialButtons() {
  return (
    <Group position="center" sx={{ padding: 15 }}>
      <GoogleButton>Continue with Google</GoogleButton>
      <TwitterButton href="https://twitter.com/mantinedev" target="_blank">
        Follow on Twitter
      </TwitterButton>
      <GithubButton>Login with GitHub</GithubButton>
    </Group>
  );
}
