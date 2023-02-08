/* eslint-disable tailwindcss/no-custom-classname */
import {
  ActionIcon,
  Avatar,
  Burger,
  Button,
  Container,
  createStyles,
  Group,
  Header,
  Image,
  Menu,
  Paper,
  Skeleton,
  Space,
  Tabs,
  Transition,
  UnstyledButton,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconBookmark,
  IconChevronRight,
  IconLogout,
  IconMessageCircle2,
  IconSearch,
  IconSettings,
  IconThumbUp,
  IconTrash,
} from '@tabler/icons';
import { getAuth } from 'firebase/auth';
import React, { forwardRef } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { openLoginModal } from 'store/ducks/loginModalSlice';
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
    color: theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colors.gray[0],
    },

    [theme.fn.smallerThan('md')]: {
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
  tabs: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  tabsList: {
    borderBottom: '0 !important',
  },

  tab: {
    fontWeight: 600,
    height: 38,
    backgroundColor: 'transparent',

    '&:hover': {
      backgroundColor: theme.colors.gray[0],
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
  tabs: {
    label: string;
    link: string;
  }[];
};

const HeaderAction = ({ tabs }: HeaderActionProps) => {
  const largerThanSm = useMediaQuery('sm');
  const largerThanMd = useMediaQuery('md');
  const navigate = useNavigate();
  const currentUser = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const params = useParams();

  const [sidebarOpened, { toggle }] = useDisclosure(false);
  const { classes, cx } = useStyles();

  const tabItems = tabs.map((tab) => (
    <Tabs.Tab value={tab.link} key={tab.label}>
      {tab.label}
    </Tabs.Tab>
  ));

  return (
    <Header height={largerThanMd ? 110 : 60} className="sticky top-0 z-50">
      <Container className="flex h-14 items-center justify-between" size="lg">
        {largerThanMd ? (
          <Image
            src={logo}
            width={180}
            fit="contain"
            onClick={() => navigate('/')}
          />
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
                    {tabs.map((tab) => (
                      <NavLink
                        key={tab.label}
                        className={cx(classes.link, {
                          [classes.linkActive]: params.genre === tab.link,
                        })}
                        to={`/genres/${tab.link}`}
                        onClick={(e) => {
                          toggle();
                        }}
                      >
                        {tab.label}
                      </NavLink>
                    ))}
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
          <ActionIcon onClick={() => navigate('/categories')}>
            <IconSearch />
          </ActionIcon>
          {!currentUser.apiChecked ? (
            <Button
              radius="xl"
              className="h-8"
              onClick={() => dispatch(openLoginModal())}
            >
              ログイン
            </Button>
          ) : currentUser.uid ? (
            <Group position="center">
              <Menu withArrow>
                <Menu.Target>
                  <UserButton image={currentUser.avatar} />
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Item
                    className="px-0"
                    onClick={() => navigate('/dashboards/all')}
                  >
                    <Menu.Label className="text-sm">
                      {currentUser.nickname}
                    </Menu.Label>
                  </Menu.Item>
                  <Menu.Divider />
                  <Menu.Item
                    icon={<IconBookmark size={14} stroke={1.5} />}
                    onClick={() => navigate('/dashboards/bookmarks')}
                  >
                    ブックマークした記事
                  </Menu.Item>
                  <Menu.Item
                    icon={<IconMessageCircle2 size={14} stroke={1.5} />}
                    onClick={() => navigate('/dashboards/comments')}
                  >
                    コメントした記事
                  </Menu.Item>
                  <Menu.Item
                    icon={<IconThumbUp size={14} stroke={1.5} />}
                    onClick={() => navigate('/dashboards/likes')}
                  >
                    いいねした記事
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
                      navigate('/');
                    }}
                  >
                    ログアウト
                  </Menu.Item>
                  <Menu.Divider />
                  <Menu.Label>Danger zone</Menu.Label>
                  <Menu.Item color="red" icon={<IconTrash size={14} />}>
                    退会する
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Group>
          ) : (
            <Skeleton height={40} circle />
          )}
          <LoginForm />
        </Group>
      </Container>
      <Space h="xs" />
      <Container size="lg">
        <div className="flex justify-around">
          <Tabs
            value={params.genre || ''}
            onTabChange={(value) => {
              navigate(`/genres/${value}`);
            }}
            variant="pills"
            classNames={{
              root: classes.tabs,
              tabsList: classes.tabsList,
              tab: classes.tab,
            }}
          >
            <Tabs.List>{tabItems}</Tabs.List>
          </Tabs>
        </div>
      </Container>
    </Header>
  );
};

export default HeaderAction;
