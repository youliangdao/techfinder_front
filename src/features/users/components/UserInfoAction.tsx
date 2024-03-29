import { ActionIcon, Avatar, Paper, Stack, Text, Title } from '@mantine/core';
import { GithubIcon, TwitterIcon } from '@mantine/ds';
import { useMediaQuery } from 'lib/mantine/useMediaQuery';
import React from 'react';

interface UserInfoActionProps {
  name: string;
  avatar: string;
  description: string;
  githubUsername: string;
  twitterUsername: string;
}

const UserInfoAction = ({
  avatar,
  name,
  description,
  githubUsername,
  twitterUsername,
}: UserInfoActionProps) => {
  const largerThanSm = useMediaQuery('sm');

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
          <div className="flex space-x-5">
            <Avatar src={avatar} size={120} radius={120} />
            <Stack>
              <Title order={3} weight={500}>
                {name}
              </Title>
              <Text size="sm">{description}</Text>
              <div className="flex w-1/12 justify-start">
                {twitterUsername && (
                  <ActionIcon
                    component="a"
                    href={`https://twitter.com/${twitterUsername}`}
                    target="_blank"
                  >
                    <TwitterIcon size={18} />
                  </ActionIcon>
                )}
                {githubUsername && (
                  <ActionIcon
                    component="a"
                    href={`https://github.com/${githubUsername}`}
                    target="_blank"
                  >
                    <GithubIcon size={18} />
                  </ActionIcon>
                )}
              </div>
            </Stack>
          </div>
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
            {twitterUsername && (
              <ActionIcon
                component="a"
                href={`https://twitter.com/${twitterUsername}`}
                target="_blank"
              >
                <TwitterIcon size={18} />
              </ActionIcon>
            )}
            {githubUsername && (
              <ActionIcon
                component="a"
                href={`https://github.com/${githubUsername}`}
                target="_blank"
              >
                <GithubIcon size={18} />
              </ActionIcon>
            )}
          </div>
        </Stack>
      )}
    </Paper>
  );
};

export default UserInfoAction;
