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
import { IconBookmark, IconMessageCircle2, IconThumbUp } from '@tabler/icons';
import { useMutateBookmark } from 'articles/hooks/useMutateBookmark';
import { useMutateLike } from 'articles/hooks/useMutateLike';
import { useQueryArticleBookmarks } from 'articles/hooks/useQueryArticleBookmarks';
import { useQueryArticleLikes } from 'articles/hooks/useQueryArticleLikes';
import { useQueryBookmarks } from 'articles/hooks/useQueryBookmarks';
import { useQueryLikes } from 'articles/hooks/useQueryLikes';
import { Article } from 'articles/types';
import { useQueryArticleComments } from 'comments/hooks/useQueryArticleComments';
import ArticleComments from 'lib/modal/ArticleComments';
import React from 'react';
import { useNavigate } from 'react-router-dom';
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

  const [commentOpened, { open, close }] = useDisclosure(false);
  const curentUser = useAppSelector(selectUser);

  const articleCommentsQuery = useQueryArticleComments(id);
  const userBookmarksQuery = useQueryBookmarks();
  const userLikesQuery = useQueryLikes();
  const articleBookmarksQuery = useQueryArticleBookmarks(id);
  const articleLikesQuery = useQueryArticleLikes(id);
  const { createBookmarkMutation, deleteBookmarkMutation } =
    useMutateBookmark();
  const { createLikeMutation, deleteLikeMutation } = useMutateLike();

  const dispatch = useAppDispatch();

  const isBookmark =
    userBookmarksQuery.data &&
    userBookmarksQuery.data.find((article) => article.id === id);

  const isLike =
    userLikesQuery.data &&
    userLikesQuery.data.find((article) => article.id === id);

  const bookmark = async () => {
    if (isBookmark) {
      deleteBookmarkMutation.mutate({
        id: id,
        title: title,
        categories: categories,
        date: date,
        image: image,
        link: link,
        media: media,
      });
    } else {
      createBookmarkMutation.mutate({
        id: id,
        title: title,
        categories: categories,
        date: date,
        image: image,
        link: link,
        media: media,
      });
    }
  };
  const like = async () => {
    if (isLike) {
      deleteLikeMutation.mutate({
        id: id,
        title: title,
        categories: categories,
        date: date,
        image: image,
        link: link,
        media: media,
      });
    } else {
      createLikeMutation.mutate({
        id: id,
        title: title,
        categories: categories,
        date: date,
        image: image,
        link: link,
        media: media,
      });
    }
  };

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
                <ActionIcon
                  onClick={bookmark}
                  loading={articleBookmarksQuery.isLoading}
                >
                  {isBookmark ? (
                    <IconBookmark
                      size={18}
                      color={theme.colors.blue[6]}
                      stroke={1.5}
                      fill={theme.colors.blue[6]}
                    />
                  ) : (
                    <IconBookmark size={18} stroke={1.5} />
                  )}
                </ActionIcon>
                {/* <Text size="sm" className="text-m_dark-2">
                  {articleBookmarksQuery.data}
                </Text> */}
              </Center>
            ) : (
              <Center>
                <ActionIcon
                  onClick={() => {
                    dispatch(openLoginModal());
                  }}
                  loading={articleBookmarksQuery.isLoading}
                >
                  <IconBookmark size={18} stroke={1.5} />
                </ActionIcon>
                {/* <Text size="sm" className="text-m_dark-2">
                  {articleBookmarksQuery.data}
                </Text> */}
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
                article={{
                  image,
                  categories,
                  title,
                  date,
                  media,
                  link,
                  id,
                }}
                commentLists={
                  articleCommentsQuery.data ? articleCommentsQuery.data : []
                }
              />
            </Modal>
            <Center>
              <ActionIcon
                onClick={() => open()}
                loading={articleCommentsQuery.isLoading}
              >
                <IconMessageCircle2 size={16} stroke={1.5} />
              </ActionIcon>
              <Text size="sm" className="text-m_dark-2">
                {articleCommentsQuery.data?.length}
              </Text>
            </Center>
            {curentUser.uid ? (
              <Center>
                <ActionIcon
                  onClick={like}
                  loading={articleLikesQuery.isLoading}
                >
                  <IconThumbUp
                    size={18}
                    color={isLike && theme.colors.blue[6]}
                    stroke={1.5}
                  />
                </ActionIcon>
                <Text
                  size="sm"
                  color={isLike ? theme.colors.blue[6] : theme.colors.dark[2]}
                >
                  {articleLikesQuery.data}
                </Text>
              </Center>
            ) : (
              <Center>
                <ActionIcon
                  onClick={() => {
                    dispatch(openLoginModal());
                  }}
                  loading={articleLikesQuery.isLoading}
                >
                  <IconThumbUp size={18} stroke={1.5} />
                </ActionIcon>
                <Text size="sm" color={theme.colors.dark[2]}>
                  {articleLikesQuery.data}
                </Text>
              </Center>
            )}
          </Group>
        </Group>
      </Stack>
    </Card>
  );
};

export default ArticleItem;
