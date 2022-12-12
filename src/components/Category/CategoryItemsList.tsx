/* eslint-disable tailwindcss/no-custom-classname */
import {
  Anchor,
  Card,
  createStyles,
  Group,
  SimpleGrid,
  Text,
  UnstyledButton,
} from '@mantine/core';
import React from 'react';

import { ReactComponent as ReactSVG } from '/src/react.svg';
import { ReactComponent as RailsSVG } from '/src/rubyonrails.svg';
import { ReactComponent as VueSVG } from '/src/vue.svg';

const mockdata = [
  { title: 'Ruby on Rails', icon: RailsSVG },
  { title: 'React', icon: ReactSVG },
  { title: 'Vue.js', icon: VueSVG },
];

const useStyles = createStyles((theme) => ({
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
  },

  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: theme.radius.md,
    height: 90,
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    transition: 'box-shadow 150ms ease, transform 100ms ease',

    '&:hover': {
      boxShadow: `${theme.shadows.md} !important`,
      transform: 'scale(1.05)',
    },
  },
}));

const CategoryItemsList = () => {
  const { classes } = useStyles();

  const items = mockdata.map((item) => (
    <UnstyledButton key={item.title} className={classes.item}>
      <item.icon />
      <Text size="xs" mt={7}>
        {item.title}
      </Text>
    </UnstyledButton>
  ));

  return (
    <Card withBorder radius="md" className="max-w-md">
      <Group position="apart">
        <Text className={classes.title}>人気のカテゴリ</Text>
        <Anchor size="xs" sx={{ lineHeight: 1 }}>
          すべてのカテゴリを見る
        </Anchor>
      </Group>
      <SimpleGrid cols={3} mt="md">
        {items}
      </SimpleGrid>
    </Card>
  );
};

export default CategoryItemsList;
