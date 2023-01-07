/* eslint-disable tailwindcss/no-custom-classname */
import {
  ActionIcon,
  Anchor,
  Card,
  Center,
  createStyles,
  Group,
  Image,
  Modal,
  Space,
  Stack,
  Text,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBookmark, IconHeart, IconMessageCircle2 } from '@tabler/icons';
import { deleteBookmark } from 'articles/api/deleteBookmark';
import { deleteLike } from 'articles/api/deleteLike';
import { getBookmarkCounts } from 'articles/api/getBookmarkCounts';
import { getLikeCounts } from 'articles/api/getLikeCounts';
import { postBookmarks } from 'articles/api/postBookmarks';
import { postLikes } from 'articles/api/postLikes';
import { Article } from 'articles/types';
import { fetchArticleComments } from 'comments/api/fetchArticleComments';
import { Comment } from 'comments/types';
import { formatDistanceToNow } from 'date-fns';
import { ja } from 'date-fns/locale';
import { getAuth } from 'firebase/auth';
import ArticleComments from 'lib/modal/ArticleComments';
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
import { getUserAvatar } from 'users/api/getUserAvatar';

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
  const [commentLists, setCommentLists] = useState<Comment[]>([]);
  const [likeCounts, setLikeCounts] = useState<number>();
  const [bookmarkCounts, setBookmarkCounts] = useState<number>();

  const [commentOpened, { open, close }] = useDisclosure(false);
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
        setBookmarkCounts((prev) => {
          if (prev) {
            return prev - 1;
          }
        });
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
        setBookmarkCounts((prev) => {
          if (prev !== undefined) {
            return prev + 1;
          }
        });
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
        setLikeCounts((prev) => {
          if (prev) {
            return prev - 1;
          }
        });
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
        setLikeCounts((prev) => {
          if (prev !== undefined) {
            return prev + 1;
          }
        });
      } catch (error: any) {
        alert(`ブックマークの保存に失敗しました。\n${error.message}`);
      }
    }
    setIsLikeLoading(false);
    setIsLiked((prev) => !prev);
  };

  useEffect(() => {
    fetchArticleComments(id)
      .then((data) => {
        bookmarkIds.includes(id) && setIsBookmark(true);
        likeIds.includes(id) && setIsLiked(true);

        (async () => {
          const newCommentLists = await Promise.all(
            data.data.map(async (comment) => {
              const avatar = await getUserAvatar(
                comment.relationships.user.data.id
              );
              return {
                id: comment.id,
                body: comment.attributes.body,
                postedAt: formatDistanceToNow(
                  new Date(comment.attributes.created_at),
                  {
                    addSuffix: true,
                    locale: ja,
                  }
                ),
                author: {
                  name:
                    data.included.find(
                      (user) => user.id === comment.relationships.user.data.id
                    )?.attributes.nickname || '',
                  image: avatar,
                },
              };
            })
          );
          setCommentLists(newCommentLists);
        })();
      })
      .catch((error) => {
        bookmarkIds.includes(id) && setIsBookmark(true);
        likeIds.includes(id) && setIsLiked(true);
        alert('コメントの取得に失敗しました');
      });
  }, [id, bookmarkIds, likeIds]);

  useEffect(() => {
    try {
      getLikeCounts(id).then((data) => setLikeCounts(data.count));
      getBookmarkCounts(id).then((data) => setBookmarkCounts(data.count));
    } catch (error) {
      alert('いいね数・ブックマーク数の取得に失敗しました');
    }
  }, [id]);

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
                onClick={() => navigate(`/categories/${category.path}/all`)}
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
              <Center>
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
                <Text size="sm" className="text-m_dark-2">
                  {likeCounts}
                </Text>
              </Center>
            ) : (
              <Center>
                <ActionIcon
                  onClick={() => {
                    dispatch(openLoginModal());
                  }}
                >
                  <IconHeart size={18} stroke={1.5} />
                </ActionIcon>
                <Text size="sm" className="text-m_dark-2">
                  {likeCounts}
                </Text>
              </Center>
            )}
            {curentUser.uid ? (
              <Center>
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
                <Text size="sm" className="text-m_dark-2">
                  {bookmarkCounts}
                </Text>
              </Center>
            ) : (
              <Center>
                <ActionIcon
                  onClick={() => {
                    dispatch(openLoginModal());
                  }}
                >
                  <IconBookmark size={18} stroke={1.5} />
                </ActionIcon>
                <Text size="sm" className="text-m_dark-2">
                  {bookmarkCounts}
                </Text>
              </Center>
            )}
            <Modal
              opened={commentOpened}
              onClose={close}
              title={title}
              size="lg"
              classNames={{
                title: 'font-bold text-lg',
              }}
            >
              <Space h={30} />
              <ArticleComments
                articleId={id}
                commentLists={commentLists}
                setCommentLists={setCommentLists}
              />
            </Modal>
            <Center>
              <ActionIcon onClick={() => open()}>
                <IconMessageCircle2 size={16} stroke={1.5} />
              </ActionIcon>
              <Text size="sm" className="text-m_dark-2">
                {commentLists.length}
              </Text>
            </Center>
          </Group>
        </Group>
      </Stack>
    </Card>
  );
};

export default ArticleItem;
