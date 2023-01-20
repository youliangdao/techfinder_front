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
    onMutate: async (variables) => {
      await queryClient.cancelQueries({
        queryKey: ['userBookmarks', currentUser.uid],
      });
      await queryClient.cancelQueries({
        queryKey: ['articleBookmarks', variables.id],
      });
      const previousBookmarks = queryClient.getQueryData<Article[]>([
        'userBookmarks',
        currentUser.uid,
      ]);
      const previousArticleBookmarks = queryClient.getQueryData<number>([
        'articleBookmarks',
        variables.id,
      ]);
      if (previousBookmarks) {
        queryClient.setQueryData<Article[]>(
          ['userBookmarks', currentUser.uid],
          [...previousBookmarks, variables]
        );
      }
      if (previousArticleBookmarks === 0 || previousArticleBookmarks) {
        queryClient.setQueryData<number>(
          ['articleBookmarks', variables.id],
          previousArticleBookmarks + 1
        );
      }
      return { previousBookmarks, previousArticleBookmarks };
    },
    onSettled: (data, error, variables) => {
      queryClient.invalidateQueries({
        queryKey: ['userBookmarks', currentUser.uid],
      });
      queryClient.invalidateQueries({
        queryKey: ['articleBookmarks', variables.id],
      });
    },
    onError: (error, variables, context) => {
      queryClient.setQueryData<Article[]>(
        ['userBookmarks', currentUser.uid],
        context?.previousBookmarks
      );
      queryClient.setQueryData<number>(
        ['articleBookmarks', variables.id],
        context?.previousArticleBookmarks
      );
      alert('ブックマーク登録に失敗しました');
    },
  });

  const deleteBookmarkMutation = useMutation({
    mutationFn: deleteBookmark,
    onMutate: async (variables) => {
      await queryClient.cancelQueries({
        queryKey: ['userBookmarks', currentUser.uid],
      });
      await queryClient.cancelQueries({
        queryKey: ['articleBookmarks', variables.id],
      });
      const previousBookmarks = queryClient.getQueryData<Article[]>([
        'userBookmarks',
        currentUser.uid,
      ]);
      const previousArticleBookmarks = queryClient.getQueryData<number>([
        'articleBookmarks',
        variables.id,
      ]);
      if (previousBookmarks) {
        queryClient.setQueryData<Article[]>(
          ['userBookmarks', currentUser.uid],
          previousBookmarks.filter(
            (previousBookmark) => variables.id !== previousBookmark.id
          )
        );
      }

      if (previousArticleBookmarks) {
        queryClient.setQueryData<number>(
          ['articleBookmarks', variables.id],
          previousArticleBookmarks - 1
        );
      }
      return { previousBookmarks, previousArticleBookmarks };
    },
    onSettled: (data, error, variables) => {
      queryClient.invalidateQueries({
        queryKey: ['userBookmarks', currentUser.uid],
      });
      queryClient.invalidateQueries({
        queryKey: ['articleBookmarks', variables.id],
      });
    },
    onError: (error, variables, context) => {
      queryClient.setQueryData<Article[]>(
        ['userBookmarks', currentUser.uid],
        context?.previousBookmarks
      );
      queryClient.setQueryData<number>(
        ['articleBookmarks', variables.id],
        context?.previousArticleBookmarks
      );
      alert('ブックマーク解除に失敗しました');
    },
  });

  return {
    createBookmarkMutation,
    deleteBookmarkMutation,
  };
};
