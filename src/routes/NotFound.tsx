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
import { useNavigate } from 'react-router-dom';

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

const tabs = [
  {
    link: 'beginner',
    label: '個人開発の基本',
  },
  {
    link: 'idea',
    label: 'アイデア',
  },
  {
    link: 'design',
    label: 'デザイン',
  },
  {
    link: 'architecture',
    label: 'インフラ・アーキテクチャ',
  },
  {
    link: 'backend',
    label: 'バックエンド',
  },
  {
    link: 'frontend',
    label: 'フロントエンド',
  },
  {
    link: 'release',
    label: 'リリース・運用',
  },
];

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
    link: '/about',
    label: 'TechFinderについて',
  },
  {
    link: '/privacy-policy',
    label: 'プライバシーポリシー',
  },
  {
    link: '/terms',
    label: '利用規約',
  },
];

const NotFound = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();
  return (
    <>
      <HeaderAction {...{ tabs }} />
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
            <Button variant="subtle" size="md" onClick={() => navigate('/')}>
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
