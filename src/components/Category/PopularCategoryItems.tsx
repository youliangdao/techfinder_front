/* eslint-disable tailwindcss/no-custom-classname */
import {
  Anchor,
  Button,
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

import { useMediaQuery } from '../../lib/mantine/useMediaQuery';

const popularMockdata = [
  { title: 'Ruby on Rails', icon: RailsSVG },
  { title: 'React', icon: ReactSVG },
  { title: 'Vue.js', icon: VueSVG },
];

const mockdata = [
  { title: 'Ruby on Rails', icon: RailsSVG },
  { title: 'React', icon: ReactSVG },
  { title: 'Vue.js', icon: VueSVG },
  { title: 'Ruby on Rails', icon: RailsSVG },
  { title: 'React', icon: ReactSVG },
  { title: 'Vue.js', icon: VueSVG },
  { title: 'Ruby on Rails', icon: RailsSVG },
  { title: 'React', icon: ReactSVG },
  { title: 'Vue.js', icon: VueSVG },
  { title: 'Ruby on Rails', icon: RailsSVG },
  { title: 'React', icon: ReactSVG },
  { title: 'Vue.js', icon: VueSVG },
];

const useStyles = createStyles((theme) => ({
  title: {
    // fontFamily: `Greycliff CF, ${theme.fontFamily}`,
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

const PopularCategoryItems = () => {
  const { classes } = useStyles();
  const largerThanXs = useMediaQuery('xs');
  const largerThanSm = useMediaQuery('sm');
  const largerThanMd = useMediaQuery('md');
  const largerThanLg = useMediaQuery('lg');
  const largerThanXl = useMediaQuery('xl');

  const popularItems = popularMockdata.map((item) => (
    <UnstyledButton key={item.title} className={classes.item}>
      <item.icon />
      <Text size="xs" mt={7}>
        {item.title}
      </Text>
    </UnstyledButton>
  ));
  const items = mockdata.map((item) => (
    <UnstyledButton key={item.title} className={classes.item}>
      <item.icon />
      <Text size="xs" mt={7}>
        {item.title}
      </Text>
    </UnstyledButton>
  ));

  return (
    <Card radius="md">
      <Group position="apart">
        <Text className="font-bold">人気のカテゴリ</Text>
        <Anchor size="sm" sx={{ lineHeight: 1 }}>
          すべてのカテゴリを見る
        </Anchor>
      </Group>
      {largerThanSm ? (
        <>
          <SimpleGrid mt="md" className="grid-cols-3">
            {popularItems}
          </SimpleGrid>
          <SimpleGrid my="md" className="grid-cols-6">
            {items}
          </SimpleGrid>
        </>
      ) : (
        <SimpleGrid my="md" className="xs:grid-cols-4 grid-cols-3">
          {popularItems}
          {items}
        </SimpleGrid>
      )}
      <Card className="flex items-center justify-center">
        <Button>すべてのカテゴリを見る</Button>
      </Card>
    </Card>
  );
};

export default PopularCategoryItems;
