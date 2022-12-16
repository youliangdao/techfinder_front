import { Avatar, createStyles, Group, Text } from '@mantine/core';
import React from 'react';

const useStyles = createStyles((theme) => ({
  body: {
    paddingLeft: 54,
    paddingTop: theme.spacing.sm,
  },
}));

interface CommentSimpleProps {
  author: {
    name: string;
    image: string;
  };
  body: string;
  postedAt: string;
}

const CommentItem = ({ postedAt, body, author }: CommentSimpleProps) => {
  const { classes } = useStyles();
  return (
    <div>
      <Group>
        <Avatar src={author.image} alt={author.name} radius="xl" />
        <div>
          <Text size="sm">{author.name}</Text>
          <Text size="xs" color="dimmed">
            {postedAt}
          </Text>
        </div>
      </Group>
      <Text className={classes.body} size="sm">
        {body}
      </Text>
    </div>
  );
};

export default CommentItem;
