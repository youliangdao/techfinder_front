import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Article } from 'articles/types';
import axios from 'axios';
import { Comment, ResponsePostCommentType } from 'comments/types';
import { endpoint } from 'config';
import { formatDistanceToNow } from 'date-fns';
import { ja } from 'date-fns/locale';
import { getAuth } from 'firebase/auth';
import { selectUser } from 'store/ducks/userSlice';
import { useAppSelector } from 'store/hooks';

const postArticleComment = async ({
  body,
  article,
  nickname,
  avatar,
}: {
  article: Article;
  avatar: string;
  body: string;
  nickname: string;
}) => {
  const auth = getAuth();
  const idToken = await auth.currentUser?.getIdToken();
  const config = {
    headers: {
      authorization: `Bearer ${idToken}`,
    },
  };
  const res = await axios.post<ResponsePostCommentType>(
    `${endpoint}/articles/${article.id}/comments`,
    {
      body: body,
    },
    config
  );

  return {
    id: res.data.data.id,
    body: res.data.data.attributes.body,
    postedAt: formatDistanceToNow(
      new Date(res.data.data.attributes.created_at),
      {
        addSuffix: true,
        locale: ja,
      }
    ),
    author: {
      id: res.data.data.relationships.user.data.id,
      name: nickname,
      image: avatar,
    },
  };
};

const deleteArticleComment = async ({
  id,
  article,
}: {
  id: string;
  article: Article;
}) => {
  const auth = getAuth();
  const idToken = await auth.currentUser?.getIdToken();
  const config = {
    headers: {
      authorization: `Bearer ${idToken}`,
    },
  };
  return axios.delete(`${endpoint}/comments/${id}`, config);
};

const updateArticleComment = async ({
  body,
  id,
  nickname,
  avatar,
  article,
}: {
  id: string;
  article: Article;
  avatar: string;
  body: string;
  nickname: string;
}) => {
  const auth = getAuth();
  const idToken = await auth.currentUser?.getIdToken();
  const config = {
    headers: {
      authorization: `Bearer ${idToken}`,
    },
  };
  const res = await axios.patch<ResponsePostCommentType>(
    `${endpoint}/comments/${id}`,
    {
      body: body,
    },
    config
  );
  return {
    id: res.data.data.id,
    body: res.data.data.attributes.body,
    postedAt: formatDistanceToNow(
      new Date(res.data.data.attributes.created_at),
      {
        addSuffix: true,
        locale: ja,
      }
    ),
    author: {
      id: res.data.data.relationships.user.data.id,
      name: nickname,
      image: avatar,
    },
  };
};

export const useMutateArticleComment = () => {
  const queryClient = useQueryClient();
  const currentUser = useAppSelector(selectUser);
  const createCommentMutation = useMutation({
    mutationFn: postArticleComment,
    onSuccess: (res, variables) => {
      const previousArticleComments = queryClient.getQueryData<Comment[]>([
        'articleComments',
        variables.article.id,
      ]);
      const previousComments = queryClient.getQueryData<Article[]>([
        'userComments',
        currentUser.uid,
      ]);
      if (previousArticleComments) {
        queryClient.setQueryData<Comment[]>(
          ['articleComments', variables.article.id],
          [...previousArticleComments, res]
        );
      }
      if (previousComments) {
        queryClient.setQueryData<Article[]>(
          ['userComments', currentUser.uid],
          previousComments.find(
            (commentArticle) => commentArticle.id === variables.article.id
          )
            ? previousComments
            : [...previousComments, variables.article]
        );
      }
    },
    onError: (error) => {
      alert('コメント投稿に失敗しました');
    },
  });

  const deleteCommentMutation = useMutation({
    mutationFn: deleteArticleComment,
    onSuccess: (res, variables) => {
      const previousArticleComments = queryClient.getQueryData<Comment[]>([
        'articleComments',
        variables.article.id,
      ]);
      const previousComments = queryClient.getQueryData<Article[]>([
        'userComments',
        currentUser.uid,
      ]);
      if (previousArticleComments) {
        queryClient.setQueryData<Comment[]>(
          ['articleComments', variables.article.id],
          previousArticleComments.filter(
            (articleComment) => variables.id !== articleComment.id
          )
        );
      }
      if (previousComments) {
        queryClient.setQueryData<Article[]>(
          ['userComments', currentUser.uid],
          previousArticleComments
            ? previousArticleComments?.filter(
                (comment) => comment.author.name === currentUser.nickname
              ).length > 1
              ? previousComments
              : previousComments.filter(
                  (commentArticle) => commentArticle.id !== variables.article.id
                )
            : previousComments.filter(
                (commentArticle) => commentArticle.id !== variables.article.id
              )
        );
      }
    },
    onError: (error) => {
      alert('コメント削除に失敗しました');
    },
  });

  const updateCommentMutation = useMutation({
    mutationFn: updateArticleComment,
    onSuccess: (res, variables) => {
      const previousArticleComments = queryClient.getQueryData<Comment[]>([
        'articleComments',
        variables.article.id,
      ]);
      if (previousArticleComments) {
        queryClient.setQueryData<Comment[]>(
          ['articleComments', variables.article.id],
          previousArticleComments.map((articleComment) =>
            articleComment.id === variables.id ? res : articleComment
          )
        );
      }
    },
    onError: (error) => alert('コメント編集に失敗しました'),
  });

  return {
    createCommentMutation,
    deleteCommentMutation,
    updateCommentMutation,
  };
};
