/* eslint-disable tailwindcss/no-custom-classname */
import {
  ActionIcon,
  Anchor,
  Card,
  createStyles,
  Group,
  Image,
  Stack,
  Text,
} from '@mantine/core';
import { IconBookmark, IconHeart, IconShare } from '@tabler/icons';
import { deleteBookmark } from 'articles/api/deleteBookmark';
import { deleteLike } from 'articles/api/deleteLike';
import { postBookmarks } from 'articles/api/postBookmarks';
import { postLikes } from 'articles/api/postLikes';
import { Article } from 'articles/types';
import { getAuth } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  addBookmarkIds,
  deleteBookmarkIds,
  selectBookmarkIds,
} from 'store/ducks/bookmarkSlice';
import {
  addLikeIds,
  deleteLikeIds,
  selectLikeIds,
} from 'store/ducks/likeSlice';
import { openLoginModal } from 'store/ducks/loginModalSlice';
import { selectUser } from 'store/ducks/userSlice';
import { useAppDispatch, useAppSelector } from 'store/hooks';

const useStyles = createStyles((theme) => ({
  category: {
    fontSize: theme.fontSizes.xs,
    [theme.fn.smallerThan('xs')]: {
      fontSize: '10px',
    },
  },
  card: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
  },

  body: {
    padding: theme.spacing.md,
  },
}));

const ArticleItem = ({
  image,
  categories,
  title,
  date,
  media,
  link,
  id,
}: Article) => {
  const { classes, theme } = useStyles();
  const navigate = useNavigate();
  const [isBookmark, setIsBookmark] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarkLoading, setIsBookmarkLoading] = useState(false);
  const [isLikeLoading, setIsLikeLoading] = useState(false);
  const curentUser = useAppSelector(selectUser);
  const bookmarkIds = useAppSelector(selectBookmarkIds);
  const likeIds = useAppSelector(selectLikeIds);
  const dispatch = useAppDispatch();

  const bookmark = async () => {
    setIsBookmarkLoading(true);
    if (isBookmark) {
      try {
        const auth = getAuth();
        const idToken = await auth.currentUser?.getIdToken();

        const config = {
          headers: {
            authorization: `Bearer ${idToken}`,
          },
        };
        await deleteBookmark(config, id);
        dispatch(deleteBookmarkIds(id));
      } catch (error: any) {
        alert(`ブックマーク解除に失敗しました。\n${error.message}`);
      }
    } else {
      try {
        const auth = getAuth();
        const idToken = await auth.currentUser?.getIdToken();
        const config = {
          headers: {
            authorization: `Bearer ${idToken}`,
          },
        };
        await postBookmarks(config, id);
        dispatch(addBookmarkIds(id));
      } catch (error: any) {
        alert(`ブックマークの保存に失敗しました。\n${error.message}`);
      }
    }
    setIsBookmarkLoading(false);
    setIsBookmark((prev) => !prev);
  };

  const like = async () => {
    setIsLikeLoading(true);
    if (isLiked) {
      try {
        const auth = getAuth();
        const idToken = await auth.currentUser?.getIdToken();

        const config = {
          headers: {
            authorization: `Bearer ${idToken}`,
          },
        };
        await deleteLike(config, id);
        dispatch(deleteLikeIds(id));
      } catch (error: any) {
        alert(`ブックマーク解除に失敗しました。\n${error.message}`);
      }
    } else {
      try {
        const auth = getAuth();
        const idToken = await auth.currentUser?.getIdToken();
        const config = {
          headers: {
            authorization: `Bearer ${idToken}`,
          },
        };
        await postLikes(config, id);
        dispatch(addLikeIds(id));
      } catch (error: any) {
        alert(`ブックマークの保存に失敗しました。\n${error.message}`);
      }
    }
    setIsLikeLoading(false);
    setIsLiked((prev) => !prev);
  };

  useEffect(() => {
    bookmarkIds.includes(id) && setIsBookmark(true);
    likeIds.includes(id) && setIsLiked(true);
  }, [id, bookmarkIds, likeIds]);

  return (
    <Card
      radius="md"
      className="bg-m_gray-0 hover:bg-m_gray-1 w-full py-0 hover:cursor-pointer"
    >
      <Stack className="py-2">
        <div className="flex justify-between">
          <div className="xs:space-x-2 flex space-x-1">
            {categories.map((category) => (
              <Anchor
                key={category.title}
                color="dimmed"
                weight={700}
                className={classes.category}
                onClick={() => navigate(`/categories/${category.path}`)}
              >
                #{category.title}
              </Anchor>
            ))}
          </div>
        </div>
        <div className="flex justify-between space-x-3 max-sm:mt-2">
          <Anchor
            className="text-sm font-bold text-black"
            href={link}
            target="_blank"
          >
            {title}
          </Anchor>
          <a href={link} target="_blank" rel="noreferrer">
            <Image src={image} width={150} fit="contain" />
          </a>
        </div>
        <Group className="justify-between">
          <Group noWrap spacing="xs">
            <Group spacing="xs" noWrap>
              <Image src={media.image} fit="contain" width={15} />
              <Text size="xs">{media.name}</Text>
              <Text size="xs" color="dimmed">
                {date}
              </Text>
            </Group>
          </Group>
          <Group className="justify-between px-2">
            {curentUser.uid ? (
              <ActionIcon onClick={like} loading={isLikeLoading}>
                {isLiked ? (
                  <IconHeart
                    size={18}
                    color={theme.colors.red[6]}
                    stroke={1.5}
                    fill={theme.colors.red[6]}
                  />
                ) : (
                  <IconHeart size={18} stroke={1.5} />
                )}
              </ActionIcon>
            ) : (
              <ActionIcon
                onClick={() => {
                  dispatch(openLoginModal());
                }}
              >
                <IconHeart size={18} stroke={1.5} />
              </ActionIcon>
            )}
            {curentUser.uid ? (
              <ActionIcon onClick={bookmark} loading={isBookmarkLoading}>
                {isBookmark ? (
                  <IconBookmark
                    size={18}
                    color={theme.colors.yellow[6]}
                    stroke={1.5}
                    fill={theme.colors.yellow[6]}
                  />
                ) : (
                  <IconBookmark size={18} stroke={1.5} />
                )}
              </ActionIcon>
            ) : (
              <ActionIcon
                onClick={() => {
                  dispatch(openLoginModal());
                }}
              >
                <IconBookmark size={18} stroke={1.5} />
              </ActionIcon>
            )}
            <ActionIcon>
              <IconShare size={16} color={theme.colors.blue[6]} stroke={1.5} />
            </ActionIcon>
          </Group>
        </Group>
      </Stack>
      {/* <Group noWrap spacing={3} className="py-3">
        <Stack justify="space-between" spacing="xs">
          <div className="xs:space-x-2 flex space-x-1">
            {categories.map((category) => (
              <Anchor
                key={category.title}
                color="dimmed"
                weight={700}
                className={classes.category}
                onClick={() => navigate(`/categories/${category.path}`)}
              >
                #{category.title}
              </Anchor>
            ))}
          </div>
          <Anchor
            className="text-sm font-bold leading-tight text-black"
            href="https://zenn.dev/"
            target="_blank"
          >
            {title}
          </Anchor>
          <Group noWrap spacing="xs">
            <Group spacing="xs" noWrap>
              <ActionIcon size="md">
                <Zenn style={{ color: '#3EA8FF' }} />
              </ActionIcon>
              <Text size="xs">{media}</Text>
            </Group>
          </Group>
        </Stack>
        <Stack justify="space-between" spacing="xs">
          <Text size="xs" color="dimmed">
            {date}
          </Text>
          <a href="https://zenn.dev/" target="_blank" rel="noreferrer">
            <Image src={image} width={150} fit="contain" />
          </a>
          <Group className="justify-between px-2">
            <ActionIcon>
              <IconHeart size={18} color={theme.colors.red[6]} stroke={1.5} />
            </ActionIcon>
            <ActionIcon>
              <IconBookmark
                size={18}
                color={theme.colors.yellow[6]}
                stroke={1.5}
              />
            </ActionIcon>
            <ActionIcon>
              <IconShare size={16} color={theme.colors.blue[6]} stroke={1.5} />
            </ActionIcon>
          </Group>
        </Stack>
      </Group> */}
    </Card>
  );
};

export default ArticleItem;
