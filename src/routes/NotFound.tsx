import {
  Button,
  Container,
  createStyles,
  Group,
  Text,
  Title,
} from '@mantine/core';
import FooterLinks from 'components/Footer';
import HeaderAction from 'components/HeaderAction';
import React from 'react';
import { selectUser } from 'store/ducks/userSlice';
import { useAppSelector } from 'store/hooks';

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80,
  },

  label: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 220,
    lineHeight: 1,
    marginBottom: theme.spacing.xl * 1.5,
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[4]
        : theme.colors.gray[2],

    [theme.fn.smallerThan('sm')]: {
      fontSize: 120,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 38,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 32,
    },
  },

  description: {
    maxWidth: 500,
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl * 1.5,
  },
}));

const links = [
  {
    link: '/about',
    label: 'About',
  },
  {
    link: '',
    label: 'Search',
    links: [
      {
        link: '/categories',
        label: 'カテゴリから探す',
      },
      {
        link: '/articles',
        label: '記事から探す',
      },
    ],
  },
];

const data = [
  {
    link: '#',
    label: 'プライバシーポリシー',
  },
  {
    link: '#',
    label: '利用規約',
  },
];

const NotFound = () => {
  const { classes } = useStyles();
  const user = useAppSelector(selectUser);
  const isLogin = user.uid ? true : false;
  return (
    <>
      <HeaderAction {...{ links, isLogin }} />
      <Container className="py-10">
        <Container className={classes.root}>
          <div className={classes.label}>404</div>
          <Title className={classes.title}>
            You have found a secret place.
          </Title>
          <Text
            color="dimmed"
            size="lg"
            align="center"
            className={classes.description}
          >
            Unfortunately, this is only a 404 page. You may have mistyped the
            address, or the page has been moved to another URL.
          </Text>
          <Group position="center">
            <Button variant="subtle" size="md">
              Take me back to home page
            </Button>
          </Group>
        </Container>
      </Container>
      <FooterLinks {...{ data }} />
    </>
  );
};

export default NotFound;
