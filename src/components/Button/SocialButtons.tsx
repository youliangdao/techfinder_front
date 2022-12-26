import { ActionIcon, Button, ButtonProps } from '@mantine/core';
import { GithubIcon, TwitterIcon } from '@mantine/ds';
import React from 'react';

import { ReactComponent as GoogleIcon } from '/src/assets/google.svg';

type GoogleButtonProps = {
  title: string;
  onClick: () => void;
};
export function GoogleButton({ onClick, title }: GoogleButtonProps) {
  return (
    <Button
      leftIcon={
        <ActionIcon size="xs">
          <GoogleIcon />
        </ActionIcon>
      }
      variant="default"
      color="gray"
      onClick={onClick}
    >
      {title}
    </Button>
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
  return <Button {...props} leftIcon={<GithubIcon size={16} />} />;
}
