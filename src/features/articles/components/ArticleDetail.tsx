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

  const [commentOpened, { open, close }] = useDisclosure(false);

  const articleCommentsQuery = useQueryArticleComments(id);
  const userBookmarksQuery = useQueryBookmarks();
  const userLikesQuery = useQueryLikes();
  const articleBookmarksQuery = useQueryArticleBookmarks(id);
  const articleLikesQuery = useQueryArticleLikes(id);
  const { createBookmarkMutation, deleteBookmarkMutation } =
    useMutateBookmark();
  const { createLikeMutation, deleteLikeMutation } = useMutateLike();
  const curentUser = useAppSelector(selectUser);
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
      className="hover:bg-m_gray-1 bg-m_gray-0 max-w-md py-0 hover:cursor-pointer"
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
                onClick={() => navigate(`/categories/${category.path}/all`)}
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
          <Group spacing="xs" className="mt-2 justify-between">
            <Group spacing="xs" noWrap>
              <Image src={media.image} fit="contain" width={20} />
              <Text size="xs">{media.name}</Text>
              <Text size="xs" color="dimmed">
                {date}
              </Text>
            </Group>
            <Group className="">
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
                  close={close}
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
        </div>
      </Stack>
    </Card>
  );
};

export default ArticleDetail;
