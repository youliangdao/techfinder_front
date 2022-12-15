/* eslint-disable tailwindcss/no-custom-classname */
import {
  Card,
  createStyles,
  SimpleGrid,
  Text,
  UnstyledButton,
} from '@mantine/core';
import React from 'react';

import { ReactComponent as ReactSVG } from '/src/react.svg';
import { ReactComponent as RailsSVG } from '/src/rubyonrails.svg';
import { ReactComponent as VueSVG } from '/src/vue.svg';

import { useMediaQuery } from '../../lib/mantine/useMediaQuery';

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

const CategoryItems = () => {
  const { classes } = useStyles();
  const largerThanXs = useMediaQuery('xs');
  const largerThanSm = useMediaQuery('sm');
  const largerThanMd = useMediaQuery('md');
  const largerThanLg = useMediaQuery('lg');
  const largerThanXl = useMediaQuery('xl');

  // const popularItems = popularMockdata.map((item) => (
  //   <UnstyledButton key={item.title} className={classes.item}>
  //     <item.icon />
  //     <Text size="xs" mt={7}>
  //       {item.title}
  //     </Text>
  //   </UnstyledButton>
  // ));
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
      <SimpleGrid my="md" className="xs:grid-cols-4 grid-cols-3 sm:grid-cols-6">
        {items}
      </SimpleGrid>
    </Card>
  );
};

export default CategoryItems;
