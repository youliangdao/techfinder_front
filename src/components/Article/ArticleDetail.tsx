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
import { Article } from 'articles/types';
import React from 'react';

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

interface ArticleItemProps {
  title: string;
  categories: string[];
  date: string;
  image: string;
  media: string;
}

const ArticleDetail = ({ image, categories, title, date, media }: Article) => {
  const { classes, theme } = useStyles();
  return (
    <Card
      radius="md"
      className="hover:bg-m_gray-1 bg-m_gray-0 max-w-md py-0"
      component="a"
      href="https://zenn.dev/"
      target="_blank"
    >
      <Stack>
        <div className="pt-4">
          <Image src={image} />
        </div>
        <div className="">
          <div className="flex space-x-2">
            {categories.map((category) => (
              <Text key={category} color="dimmed" weight={700} size="xs">
                #{category}
              </Text>
            ))}
          </div>
          <Text className={classes.title} mt="xs" mb="md">
            {title}
          </Text>
          <Group noWrap spacing="xs" className="justify-between">
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
