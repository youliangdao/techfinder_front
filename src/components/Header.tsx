/* eslint-disable tailwindcss/no-custom-classname */
import {
  Avatar,
  Burger,
  Button,
  Center,
  Container,
  createStyles,
  Group,
  Header,
  Menu,
  Paper,
  Transition,
  UnstyledButton,
} from '@mantine/core';
import { MantineLogo } from '@mantine/ds';
import { useDisclosure } from '@mantine/hooks';
import {
  IconBookmark,
  IconChevronDown,
  IconChevronRight,
  IconHeart,
  IconLogout,
} from '@tabler/icons';
import React, { forwardRef } from 'react';

import { useMediaQuery } from '../lib/mantine/useMediaQuery';

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  //   inner: {
  //     height: HEADER_HEIGHT,
  //     display: 'flex',
  //     justifyContent: 'space-between',
  //     alignItems: 'center',
  //   },

  //   links: {
  //     [theme.fn.smallerThan('sm')]: {
  //       display: 'none',
  //     },
  //   },

  //   burger: {
  //     [theme.fn.largerThan('sm')]: {
  //       display: 'none',
  //     },
  //   },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },
  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({
        variant: 'light',
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
        .color,
    },
  },

  //   linkLabel: {
  //     marginRight: 5,
  //   },
}));

interface UserButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  name: string;
  email: string;
  icon?: React.ReactNode;
  image: string;
}

const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(
  function UserAvatarButton(
    { image, name, email, icon, ...others }: UserButtonProps,
    ref
  ) {
    return (
      <UnstyledButton
        ref={ref}
        className="hover:bg-m_gray-0 block w-full p-4 text-black"
        // sx={(theme) => ({
        //   display: 'block',
        //   width: '100%',
        //   padding: theme.spacing.md,
        //   color:
        //     theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        //   '&:hover': {
        //     backgroundColor:
        //       theme.colorScheme === 'dark'
        //         ? theme.colors.dark[8]
        //         : theme.colors.gray[0],
        //   },
        // })}
        {...others}
      >
        <Group>
          <Avatar src={image} radius="xl" />

          {icon || <IconChevronRight size={16} />}
        </Group>
      </UnstyledButton>
    );
  }
);

type HeaderActionProps = {
  isLogin: boolean;
  links: {
    label: string;
    link: string;
    links?: { label: string; link: string }[];
  }[];
};

const HeaderAction = ({ isLogin, links }: HeaderActionProps) => {
  const largerThanXs = useMediaQuery('xs');
  const largerThanSm = useMediaQuery('sm');
  const largerThanMd = useMediaQuery('md');
  const largerThanLg = useMediaQuery('lg');
  const largerThanXl = useMediaQuery('xl');

  const [opened, { toggle }] = useDisclosure(false);
  const { classes, theme } = useStyles();
  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} exitTransitionDuration={0}>
          <Menu.Target>
            <a
              href={link.link}
              // eslint-disable-next-line tailwindcss/no-custom-classname
              className="text-m_gray-7  hover:bg-m_gray-0 block rounded-sm py-2 px-3 text-sm font-medium leading-none no-underline"
              // className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className="mr-3">{link.label}</span>
                <IconChevronDown size={12} stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        // eslint-disable-next-line tailwindcss/no-custom-classname
        className="text-m_gray-7  hover:bg-m_gray-0 block rounded-sm py-2 px-3 text-sm font-medium leading-none no-underline"
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <Header height={HEADER_HEIGHT} className="sticky top-0 z-50">
      <Container className="flex h-14 items-center justify-between px-10" fluid>
        <Group>
          {!largerThanSm && (
            <>
              <Burger opened={opened} onClick={toggle} size="sm" />
              <Transition
                transition="pop-top-left"
                duration={200}
                mounted={opened}
              >
                {(styles) => (
                  <Paper
                    className="absolute inset-x-0 top-16 z-0 overflow-hidden rounded-t-none border-t-0"
                    withBorder
                    style={styles}
                  >
                    <a href="/about" className={classes.link}>
                      About
                    </a>
                    <a href="/about" className={classes.link}>
                      カテゴリから探す
                    </a>
                    <a href="/about" className={classes.link}>
                      記事から探す
                    </a>
                  </Paper>
                )}
              </Transition>
            </>
          )}
          <MantineLogo className="h-8" />
        </Group>
        <Group className="mr-5">
          {largerThanSm && <Group spacing={5}>{items}</Group>}
          {!isLogin ? (
            <Button radius="xl" className="h-8">
              Login
            </Button>
          ) : (
            <Group position="center">
              <Menu withArrow>
                <Menu.Target>
                  <UserButton
                    image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
                    name="Harriette Spoonlicker"
                    email="hspoonlicker@outlook.com"
                  />
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Item className="pb-0 font-bold">
                    テストテスト
                    <Menu.Label className="px-0 pt-0">@youliangdao</Menu.Label>
                  </Menu.Item>
                  <Menu.Divider />

                  {/* <Menu.Item
                    icon={<IconSettings size={14} />}
                    component="a"
                    href="#"
                    target="_blank"
                  >
                    Settings
                  </Menu.Item> */}
                  <Menu.Item icon={<IconHeart size={14} stroke={1.5} />}>
                    いいねした記事
                  </Menu.Item>
                  <Menu.Item icon={<IconBookmark size={14} stroke={1.5} />}>
                    ストックした記事
                  </Menu.Item>
                  {/* <Menu.Item icon={<IconSearch size={14} />}>Search</Menu.Item> */}

                  <Menu.Divider />

                  <Menu.Item color="red" icon={<IconLogout size={14} />}>
                    ログアウト
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Group>
          )}
        </Group>
      </Container>
    </Header>
  );
};

export default HeaderAction;
