import { Avatar, Button, Paper, Stack, Text, Title } from '@mantine/core';
import { GithubButton, TwitterButton } from 'Button/SocialButtons';
import { useMediaQuery } from 'lib/mantine/useMediaQuery';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface UserInfoActionProps {
  name: string;
  avatar: string;
  description: string;
}

const UserInfoAction = ({ avatar, name, description }: UserInfoActionProps) => {
  const largerThanSm = useMediaQuery('sm');
  const navigate = useNavigate();
  return (
    <Paper
      radius="md"
      withBorder
      p="lg"
      sx={(theme) => ({
        backgroundColor: theme.white,
      })}
    >
      {largerThanSm ? (
        <div className="flex justify-between space-x-5 px-10">
          <div className="flex w-2/3 space-x-5">
            <Avatar src={avatar} size={120} radius={120} />
            <Stack>
              <Title order={3} weight={500}>
                {name}
              </Title>
              <Text size="sm" className="break-all">
                {description}
              </Text>
              <div className="flex w-1/12 justify-start">
                <TwitterButton variant="subtle" className="mx-auto px-0" />
                <GithubButton variant="subtle" className="mx-auto px-0" />
              </div>
            </Stack>
          </div>
          <Button variant="default" onClick={() => navigate('/profile')}>
            プロフィールを編集する
          </Button>
        </div>
      ) : (
        <Stack>
          <Avatar src={avatar} size={120} radius={120} mx="auto" />
          <Text align="center" size="lg" weight={500} mt="md">
            {name}
          </Text>
          <div className="flex justify-center">
            <Text
              align="center"
              color="dimmed"
              size="sm"
              className="w-1/2 break-words"
            >
              {description}
            </Text>
          </div>
          <div className="mx-auto flex w-1/12 justify-center">
            <TwitterButton variant="subtle" className="mx-auto px-0" />
            <GithubButton variant="subtle" className="mx-auto px-0" />
          </div>

          <Button
            variant="default"
            fullWidth
            mt="md"
            onClick={() => navigate('/profile')}
          >
            プロフィールを編集する
          </Button>
        </Stack>
      )}
    </Paper>
  );
};

export default UserInfoAction;
