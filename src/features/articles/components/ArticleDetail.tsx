/* eslint-disable tailwindcss/no-custom-classname */
import {
  ActionIcon,
  Anchor,
  Card,
  createStyles,
  Group,
  Image,
  Stack,
  Text,
} from '@mantine/core';
import { IconBookmark, IconHeart, IconShare } from '@tabler/icons';
import { Article } from 'articles/types';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as Zenn } from '/src/assets/zenn.svg';

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

const ArticleDetail = ({ image, categories, title, date, media }: Article) => {
  const navigate = useNavigate();
  const { theme } = useStyles();
  return (
    <Card
      radius="md"
      className="hover:bg-m_gray-1 bg-m_gray-0 max-w-md py-0 hover:cursor-pointer"
      // component="a"
      // href="https://zenn.dev/"
      // target="_blank"
    >
      <Stack>
        <div className="pt-4">
          <a href="https://zenn.dev/" target="_blank" rel="noreferrer">
            <Image src={image} />
          </a>
        </div>
        <div className="">
          <div className="mb-2 flex space-x-2">
            {categories.map((category) => (
              <Anchor
                key={category.title}
                color="dimmed"
                weight={700}
                size="xs"
                onClick={() => navigate(`/categories/${category.path}/all`)}
              >
                #{category.title}
              </Anchor>
            ))}
          </div>
          <Anchor
            className="font-bold leading-tight text-black"
            mt="xs"
            mb="md"
            href="https://zenn.dev/"
            target="_blank"
          >
            {title}
          </Anchor>
          <Group noWrap spacing="xs" className="mt-2 justify-between">
            <Group spacing="xs" noWrap>
              <ActionIcon size="md">
                <Zenn style={{ color: '#3EA8FF' }} />
              </ActionIcon>
              <Text size="xs">{media}</Text>
              <Text size="xs" color="dimmed">
                {date}
              </Text>
            </Group>
            <Group className="">
              <ActionIcon>
                <IconHeart size={18} color={theme.colors.red[6]} stroke={1.5} />
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
                  size={16}
                  color={theme.colors.blue[6]}
                  stroke={1.5}
                />
              </ActionIcon>
            </Group>
          </Group>
        </div>
      </Stack>
    </Card>
  );
};

export default ArticleDetail;
