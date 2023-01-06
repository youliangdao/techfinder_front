import { getBookmarks } from 'articles/api/getBookmarks';
import { getLikes } from 'articles/api/getLikes';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setBookmarkIds } from 'store/ducks/bookmarkSlice';
import { setLikeIds } from 'store/ducks/likeSlice';
import {
  checkApi,
  checkAuth,
  login,
  logout,
  selectUser,
} from 'store/ducks/userSlice';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getAvatar } from 'users/api/getAvatar';
import { showProfile } from 'users/api/showProfile';

export const useFirebaseAuth = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectUser);
  const nextOrObserver = async (authUser: User | null) => {
    if (authUser) {
      dispatch(checkAuth(true));
      dispatch(checkApi(true));
      const idToken = await authUser.getIdToken();

      const config = {
        headers: {
          authorization: `Bearer ${idToken}`,
        },
      };
      try {
        const bookmarks = await getBookmarks(config);
        const likes = await getLikes(config);
        const bookmarkIds = bookmarks.data.map((bookmark) => bookmark.id);
        const likeIds = likes.data.map((like) => like.id);
        const user = await showProfile(config);
        dispatch(
          setBookmarkIds({
            bookmarkIds,
          })
        );
        dispatch(
          setLikeIds({
            likeIds,
          })
        );
        if (user.data.attributes.avatar_key) {
          const avatarImageUrl = await getAvatar(config);
          dispatch(
            login({
              nickname: user.data.attributes.nickname || '',
              avatar: avatarImageUrl || '',
              uid: authUser.uid,
              description: user.data.attributes.description || '',
              authChecked: true,
              apiChecked: true,
              avatarKey: user.data.attributes.avatar_key,
            })
          );
        } else {
          dispatch(
            login({
              nickname: user.data.attributes.nickname || '',
              avatar: authUser.photoURL || '',
              uid: authUser.uid,
              description: user.data.attributes.description || '',
              authChecked: true,
              apiChecked: true,
              avatarKey: '',
            })
          );
        }
      } catch (error) {
        alert(`ユーザー情報の取得に失敗しました`);
      }
    } else {
      dispatch(logout());
    }
  };

  useEffect(() => {
    const auth = getAuth();
    const unSub = onAuthStateChanged(auth, nextOrObserver);

    return () => {
      unSub();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    currentUser,
  };
};
