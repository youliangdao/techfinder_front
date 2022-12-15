/* eslint-disable tailwindcss/no-custom-classname */
import { Container, createStyles, Text, Title } from '@mantine/core';
import React from 'react';

import { ReactComponent as HeroSVG } from '/src/hero.svg';

import { useMediaQuery } from '../../lib/mantine/useMediaQuery';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : '#228BE6',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor: theme.fn.variant({
      variant: 'light',
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: '4px 12px',
  },
}));

const HeroContents = () => {
  const { classes } = useStyles();
  const largerThanXs = useMediaQuery('xs');
  const largerThanSm = useMediaQuery('sm');
  const largerThanMd = useMediaQuery('md');
  const largerThanLg = useMediaQuery('lg');
  const largerThanXl = useMediaQuery('xl');
  return (
    <div className="bg-m_gray-0">
      <Container>
        <div className={classes.inner}>
          <HeroSVG className="h-28 sm:h-40" />
          <div className="mr-0 max-w-full max-sm:my-auto md:mr-16 md:max-w-md">
            <Title
              className="max-xs:text-xl text-2xl font-extrabold"
              style={{ color: '#228BE6' }}
            >
              個人開発者のための技術記事データベース
              {/* A <span className={classes.highlight}>modern</span> React <br />{' '}
              components library */}
            </Title>
            <Text className="max-sm:hidden sm:mt-4">
              「アイデアが思い浮かばない」「どんな技術で開発すればいいのかわからない」
              <br />
              そんな個人開発者のよくある悩みをStackDeveloperは解決します。
            </Text>

            {/* <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={12} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>検索効率の</b> –
              </List.Item>
              <List.Item>
                <b>管理しやすく</b> –
              </List.Item>
              <List.Item>
                <b>No annoying focus ring</b> – focus ring will appear only when
                user navigates with keyboard
              </List.Item>
            </List> */}

            {/* <Group mt={30}>
              <Button radius="xl" size="md" className={classes.control}>
                Get started
              </Button>
              <Button
                variant="default"
                radius="xl"
                size="md"
                className={classes.control}
              >
                Source code
              </Button>
            </Group> */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroContents;
