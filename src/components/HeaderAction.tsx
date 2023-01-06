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
  Image,
  Menu,
  Paper,
  Transition,
  UnstyledButton,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconBookmark,
  IconChevronDown,
  IconChevronRight,
  IconHeart,
  IconLogout,
  IconSettings,
} from '@tabler/icons';
import { getAuth } from 'firebase/auth';
import React, { forwardRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  openLoginModal,
  selectIsLoginOpened,
} from 'store/ducks/loginModalSlice';
import { selectUser } from 'store/ducks/userSlice';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import logo from '/src/assets/logo3.png';

import LoginForm from '../features/auth/components/LoginForm';
import { useMediaQuery } from '../lib/mantine/useMediaQuery';

const useStyles = createStyles((theme) => ({
  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    cursor: 'pointer',
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
}));

interface UserButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  image: string;
}

const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(
  function UserAvatarButton({ image, ...others }: UserButtonProps, ref) {
    return (
      <UnstyledButton
        ref={ref}
        className="hover:bg-m_gray-0 block w-full p-4 text-black"
        {...others}
      >
        <Group>
          <Avatar src={image} radius="xl" />
          <IconChevronRight size={16} />
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
  const largerThanSm = useMediaQuery('sm');
  const navigate = useNavigate();
  const currentUser = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const isLoginOpened = useAppSelector(selectIsLoginOpened);

  const [sidebarOpened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <NavLink
        key={item.label}
        to={item.link}
        className="text-m_gray-7  hover:bg-m_gray-0 no-underline"
      >
        <Menu.Item>{item.label}</Menu.Item>
      </NavLink>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} exitTransitionDuration={0}>
          <Menu.Target>
            <NavLink
              to={link.link}
              // eslint-disable-next-line tailwindcss/no-custom-classname
              className="text-m_gray-7  hover:bg-m_gray-0 block rounded-sm py-2 px-3 text-sm font-medium leading-none no-underline"
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className="mr-3">{link.label}</span>
                <IconChevronDown size={12} stroke={1.5} />
              </Center>
            </NavLink>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <NavLink
        key={link.label}
        to={link.link}
        // eslint-disable-next-line tailwindcss/no-custom-classname
        className="text-m_gray-7  hover:bg-m_gray-0 block rounded-sm py-2 px-3 text-sm font-medium leading-none no-underline"
        // onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </NavLink>
    );
  });

  return (
    <Header height={60} className="sticky top-0 z-50">
      <Container
        className="flex h-14 items-center justify-between sm:px-10"
        fluid
      >
        {largerThanSm ? (
          <Group>
            <Image
              src={logo}
              height={60}
              fit="contain"
              onClick={() => navigate('/')}
            />
          </Group>
        ) : (
          <Group>
            <>
              <Burger opened={sidebarOpened} onClick={toggle} size="sm" />
              <Transition
                transition="pop-top-left"
                duration={200}
                mounted={sidebarOpened}
              >
                {(styles) => (
                  <Paper
                    className="border-t-1 absolute inset-x-0 top-14 z-0 overflow-hidden rounded-t-none"
                    withBorder
                    style={styles}
                  >
                    <NavLink
                      className={classes.link}
                      to="/about"
                      onClick={toggle}
                    >
                      StackDeveloperについて
                    </NavLink>
                    <NavLink
                      className={classes.link}
                      to="/categories"
                      onClick={toggle}
                    >
                      カテゴリから探す
                    </NavLink>
                    <NavLink
                      className={classes.link}
                      to="/articles"
                      onClick={toggle}
                    >
                      記事から探す
                    </NavLink>
                  </Paper>
                )}
              </Transition>
            </>
            <Image
              src={logo}
              width={120}
              fit="contain"
              onClick={() => navigate('/')}
            />
          </Group>
        )}
        <Group className="mr-2 sm:mr-4">
          {largerThanSm && <Group spacing={5}>{items}</Group>}
          {!isLogin ? (
            <Button
              radius="xl"
              className="h-8"
              onClick={() => dispatch(openLoginModal())}
            >
              Login
            </Button>
          ) : (
            <Group position="center">
              <Menu withArrow>
                <Menu.Target>
                  <UserButton image={currentUser.avatar} />
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Item
                    className="px-0"
                    onClick={() => navigate('/dashboards')}
                  >
                    <Menu.Label className="text-sm">
                      {currentUser.nickname}
                    </Menu.Label>
                  </Menu.Item>
                  <Menu.Divider />
                  <Menu.Item
                    icon={<IconHeart size={14} stroke={1.5} />}
                    onClick={() => navigate('/dashboards?tab=likes')}
                  >
                    いいねした記事
                  </Menu.Item>
                  <Menu.Item
                    icon={<IconBookmark size={14} stroke={1.5} />}
                    onClick={() => navigate('/dashboards?tab=bookmarks')}
                  >
                    ブックマークした記事
                  </Menu.Item>
                  <Menu.Divider />
                  <Menu.Label>Settings</Menu.Label>
                  <Menu.Item
                    icon={<IconSettings size={14} stroke={1.5} />}
                    onClick={() => navigate('/profile')}
                  >
                    プロフィール編集
                  </Menu.Item>
                  <Menu.Item
                    icon={<IconLogout size={14} />}
                    onClick={() => {
                      const auth = getAuth();
                      auth.signOut();
                    }}
                  >
                    ログアウト
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Group>
          )}
          <LoginForm />
        </Group>
      </Container>
    </Header>
  );
};

export default HeaderAction;
