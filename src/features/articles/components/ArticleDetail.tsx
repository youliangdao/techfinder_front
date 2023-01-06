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

const ArticleDetail = ({
  image,
  categories,
  title,
  date,
  media,
  link,
  id,
}: Article) => {
  const navigate = useNavigate();
  const { theme } = useStyles();
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
      className="hover:bg-m_gray-1 bg-m_gray-0 max-w-md py-0 hover:cursor-pointer"
      // component="a"
      // href="https://zenn.dev/"
      // target="_blank"
    >
      <Stack>
        <div className="pt-4">
          <a href={link} target="_blank" rel="noreferrer">
            <Image src={image} />
          </a>
        </div>
        <div className="pb-2">
          <div className="mb-2 flex space-x-2">
            {categories.map((category) => (
              <Anchor
                key={category.title}
                color="dimmed"
                weight={700}
                size="xs"
                onClick={() => navigate(`/categories/${category.path}`)}
              >
                #{category.title}
              </Anchor>
            ))}
          </div>
          <Anchor
            className="font-bold leading-tight text-black"
            mt="xs"
            mb="md"
            href={link}
            target="_blank"
          >
            {title}
          </Anchor>
          <Group noWrap spacing="xs" className="mt-2 justify-between">
            <Group spacing="xs" noWrap>
              {/* <ActionIcon size="md">
                <Zenn style={{ color: '#3EA8FF' }} />
              </ActionIcon> */}
              <Image src={media.image} fit="contain" width={20} />
              <Text size="xs">{media.name}</Text>
              <Text size="xs" color="dimmed">
                {date}
              </Text>
            </Group>
            <Group className="">
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
                <IconShare
                  size={16}
                  color={theme.colors.blue[6]}
                  stroke={1.5}
                />
              </ActionIcon>
            </Group>
          </Group>
        </div>
      </Stack>
    </Card>
  );
};

export default ArticleDetail;
