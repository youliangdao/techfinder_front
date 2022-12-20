import { Avatar, Button, Group, Paper, Stack, Text } from '@mantine/core';
import { useMediaQuery } from 'lib/mantine/useMediaQuery';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface UserInfoActionProps {
  name: string;
  avatar: string;
  email: string;
  job: string;
}

const UserInfoAction = ({ avatar, name, email, job }: UserInfoActionProps) => {
  const largerThanSm = useMediaQuery('sm');
  const navigate = useNavigate();
  return (
    <Paper
      radius="md"
      withBorder
      p="lg"
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      })}
    >
      {largerThanSm ? (
        <Group position="apart" spacing="md" className="px-10">
          <Group>
            <Avatar src={avatar} size={120} radius={120} />
            <Stack>
              <Text size="lg" weight={500}>
                {name}
              </Text>
              <Text color="dimmed" size="sm">
                {email} • {job}
              </Text>
            </Stack>
          </Group>
          <Button variant="default" onClick={() => navigate('/profile')}>
            プロフィールを編集する
          </Button>
        </Group>
      ) : (
        <>
          <Avatar src={avatar} size={120} radius={120} mx="auto" />
          <Text align="center" size="lg" weight={500} mt="md">
            {name}
          </Text>
          <Text align="center" color="dimmed" size="sm">
            {email} • {job}
          </Text>

          <Button variant="default" fullWidth mt="md">
            プロフィールを編集する
          </Button>
        </>
      )}
    </Paper>
  );
};

export default UserInfoAction;
