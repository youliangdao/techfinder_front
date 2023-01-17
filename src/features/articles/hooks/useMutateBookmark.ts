import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteBookmark } from 'articles/api/deleteBookmark';
import { postBookmark } from 'articles/api/postBookmark';
import { Article } from 'articles/types';
import { selectUser } from 'store/ducks/userSlice';
import { useAppSelector } from 'store/hooks';

export const useMutateBookmark = () => {
  const queryClient = useQueryClient();
  const currentUser = useAppSelector(selectUser);

  const createBookmarkMutation = useMutation({
    mutationFn: postBookmark,
    onSuccess: (res, variables) => {
      const previousBookmarks = queryClient.getQueryData<Article[]>([
        'userBookmarks',
        currentUser.uid,
      ]);
      const previousArticleBookmarks = queryClient.getQueryData<number>([
        'articleBookmarks',
        variables,
      ]);
      if (previousBookmarks) {
        queryClient.setQueryData<Article[]>(
          ['userBookmarks', currentUser.uid],
          [...previousBookmarks, res]
        );
      }
      if (previousArticleBookmarks === 0) {
        queryClient.setQueryData<number>(
          ['articleBookmarks', variables],
          previousArticleBookmarks + 1
        );
      }
    },
    onError: (error) => {
      alert('ブックマーク登録に失敗しました');
    },
  });

  const deleteBookmarkMutation = useMutation({
    mutationFn: deleteBookmark,
    onSuccess: (res, variables) => {
      const previousBookmarks = queryClient.getQueryData<Article[]>([
        'userBookmarks',
        currentUser.uid,
      ]);
      const previousArticleBookmarks = queryClient.getQueryData<number>([
        'articleBookmarks',
        variables,
      ]);
      if (previousBookmarks) {
        queryClient.setQueryData<Article[]>(
          ['userBookmarks', currentUser.uid],
          previousBookmarks.filter(
            (previousBookmark) => variables !== previousBookmark.id
          )
        );
      }
      if (previousArticleBookmarks) {
        queryClient.setQueryData<number>(
          ['articleBookmarks', variables],
          previousArticleBookmarks - 1
        );
      }
    },
    onError: (error) => {
      alert('ブックマーク解除に失敗しました');
    },
  });

  return {
    createBookmarkMutation,
    deleteBookmarkMutation,
  };
};
