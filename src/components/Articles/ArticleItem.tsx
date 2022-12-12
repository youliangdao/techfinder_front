import {
  ActionIcon,
  Card,
  createStyles,
  Group,
  Image,
  Text,
} from '@mantine/core';
import { IconBookmark, IconHeart, IconShare } from '@tabler/icons';
import React from 'react';

import { ReactComponent as Zenn } from '/src/zenn.svg';

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

const ArticleItem = ({
  image,
  categories,
  title,
  date,
  media,
}: ArticleItemProps) => {
  const { classes, theme } = useStyles();
  return (
    <Card radius="md" className="max-w-md bg-white py-0" withBorder>
      <Group noWrap spacing={0} className="">
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
          <Group noWrap spacing="xs">
            <Group spacing="xs" noWrap>
              <ActionIcon size="md">
                <Zenn style={{ color: '#3EA8FF' }} />
              </ActionIcon>
              <Text size="xs">{media}</Text>
            </Group>
            <Text size="xs" color="dimmed">
              {date}
            </Text>
          </Group>
        </div>
        <div className="pt-4">
          <Image src={image} height={100} width={140} />
          <Group className="justify-between px-2">
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
              <IconShare size={16} color={theme.colors.blue[6]} stroke={1.5} />
            </ActionIcon>
          </Group>
        </div>
      </Group>
    </Card>
  );
};

export default ArticleItem;
