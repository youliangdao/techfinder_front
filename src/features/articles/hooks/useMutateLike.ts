import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteLike } from 'articles/api/deleteLike';
import { postLike } from 'articles/api/postLike';
import { Article } from 'articles/types';
import { selectUser } from 'store/ducks/userSlice';
import { useAppSelector } from 'store/hooks';

export const useMutateLike = () => {
  const queryClient = useQueryClient();
  const currentUser = useAppSelector(selectUser);

  const createLikeMutation = useMutation({
    mutationFn: postLike,
    onMutate: async (variables) => {
      await queryClient.cancelQueries({
        queryKey: ['userLikes', currentUser.uid],
      });
      await queryClient.cancelQueries({
        queryKey: ['articleLikes', variables.id],
      });
      const previousLikes = queryClient.getQueryData<Article[]>([
        'userLikes',
        currentUser.uid,
      ]);
      const previousArticleLikes = queryClient.getQueryData<number>([
        'articleLikes',
        variables.id,
      ]);
      if (previousLikes) {
        queryClient.setQueryData<Article[]>(
          ['userLikes', currentUser.uid],
          [...previousLikes, variables]
        );
      }
      if (previousArticleLikes === 0 || previousArticleLikes) {
        queryClient.setQueryData<number>(
          ['articleLikes', variables.id],
          previousArticleLikes + 1
        );
      }
      return { previousLikes, previousArticleLikes };
    },
    onSettled: (data, error, variables) => {
      queryClient.invalidateQueries({
        queryKey: ['userLikes', currentUser.uid],
      });
      queryClient.invalidateQueries({
        queryKey: ['articleLikes', variables.id],
      });
    },
    onError: (error, variables, context) => {
      queryClient.setQueryData<Article[]>(
        ['userLikes', currentUser.uid],
        context?.previousLikes
      );
      queryClient.setQueryData<number>(
        ['articleLikes', variables.id],
        context?.previousArticleLikes
      );
      alert('ブックマーク登録に失敗しました');
    },
  });

  const deleteLikeMutation = useMutation({
    mutationFn: deleteLike,
    onMutate: async (variables) => {
      await queryClient.cancelQueries({
        queryKey: ['userLikes', currentUser.uid],
      });
      await queryClient.cancelQueries({
        queryKey: ['articleLikes', variables.id],
      });
      const previousLikes = queryClient.getQueryData<Article[]>([
        'userLikes',
        currentUser.uid,
      ]);
      const previousArticleLikes = queryClient.getQueryData<number>([
        'articleLikes',
        variables.id,
      ]);
      if (previousLikes) {
        queryClient.setQueryData<Article[]>(
          ['userLikes', currentUser.uid],
          previousLikes.filter(
            (previousBookmark) => variables.id !== previousBookmark.id
          )
        );
      }

      if (previousArticleLikes) {
        queryClient.setQueryData<number>(
          ['articleLikes', variables.id],
          previousArticleLikes - 1
        );
      }
      return { previousLikes, previousArticleLikes };
    },
    onSettled: (data, error, variables) => {
      queryClient.invalidateQueries({
        queryKey: ['userLikes', currentUser.uid],
      });
      queryClient.invalidateQueries({
        queryKey: ['articleLikes', variables.id],
      });
    },
    onError: (error, variables, context) => {
      queryClient.setQueryData<Article[]>(
        ['userLikes', currentUser.uid],
        context?.previousLikes
      );
      queryClient.setQueryData<number>(
        ['articleLikes', variables.id],
        context?.previousArticleLikes
      );
      alert('ブックマーク解除に失敗しました');
    },
  });

  return {
    createLikeMutation,
    deleteLikeMutation,
  };
};
