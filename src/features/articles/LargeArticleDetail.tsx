/* eslint-disable tailwindcss/no-custom-classname */
import {
  ActionIcon,
  Card,
  createStyles,
  Group,
  Image,
  Stack,
  Text,
} from '@mantine/core';
import { IconBookmark, IconHeart, IconShare } from '@tabler/icons';
import React from 'react';

import { ReactComponent as Zenn } from '/src/zenn.svg';

import { useMediaQuery } from '../../lib/mantine/useMediaQuery';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
  },

  body: {
    padding: theme.spacing.md,
  },
}));

interface ArticleItemProps {
  title: string;
  categories: string[];
  date: string;
  image: string;
  media: string;
}

const LargeArticleDetail = ({
  image,
  categories,
  title,
  date,
  media,
}: ArticleItemProps) => {
  const { theme } = useStyles();
  const largerThanXs = useMediaQuery('xs');
  return (
    <Card
      radius="md"
      className="hover:bg-m_gray-1 bg-m_gray-0 py-4"
      component="a"
      href="https://zenn.dev/"
      target="_blank"
    >
      <Stack className="xs:space-y-5 space-y-2">
        <div className="pt-4">
          {largerThanXs ? (
            <Image src={image} height={300} fit="contain" />
          ) : (
            <Image src={image} height={200} fit="contain" />
          )}
        </div>
        <div className="xs:px-10">
          <div className="flex space-x-2">
            {categories.map((category) => (
              <Text
                key={category}
                color="dimmed"
                weight={700}
                className="xs:text-lg text-sm"
              >
                #{category}
              </Text>
            ))}
          </div>
          <Text className="xs:text-xl font-bold" mt="xs" mb="md">
            {title}
          </Text>
          <Group noWrap spacing="xs" className="justify-between">
            <Group spacing="xs" noWrap>
              {largerThanXs ? (
                <ActionIcon size="lg">
                  <Zenn style={{ color: '#3EA8FF' }} />
                </ActionIcon>
              ) : (
                <ActionIcon size="sm">
                  <Zenn style={{ color: '#3EA8FF' }} />
                </ActionIcon>
              )}
              <Text className="xs:text-lg text-sm">{media}</Text>
              <Text className="xs:text-lg text-sm" color="dimmed">
                {date}
              </Text>
            </Group>
            {largerThanXs ? (
              <Group className="">
                <ActionIcon>
                  <IconHeart
                    size={30}
                    color={theme.colors.red[6]}
                    stroke={1.5}
                  />
                </ActionIcon>
                <ActionIcon>
                  <IconBookmark
                    size={30}
                    color={theme.colors.yellow[6]}
                    stroke={1.5}
                  />
                </ActionIcon>
                <ActionIcon>
                  <IconShare
                    size={30}
                    color={theme.colors.blue[6]}
                    stroke={1.5}
                  />
                </ActionIcon>
              </Group>
            ) : (
              <Group className="">
                <ActionIcon>
                  <IconHeart
                    size={18}
                    color={theme.colors.red[6]}
                    stroke={1.5}
                  />
                </ActionIcon>
                <ActionIcon>
                  <IconBookmark
                    size={18}
                    color={theme.colors.yellow[6]}
                    stroke={1.5}
                  />
                </ActionIcon>
                <ActionIcon>
                  <IconShare
                    size={18}
                    color={theme.colors.blue[6]}
                    stroke={1.5}
                  />
                </ActionIcon>
              </Group>
            )}
          </Group>
        </div>
      </Stack>
    </Card>
  );
};

export default LargeArticleDetail;
