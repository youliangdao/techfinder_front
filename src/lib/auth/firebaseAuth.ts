import axios from 'axios';
import { endpoint } from 'config';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
        const res = await axios.post(
          `${endpoint}/authentication`,
          null,
          config
        );

        if (res.status !== 200) {
          throw new Error('login error');
        }
        const user = await showProfile(config);

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
              twitterUsername: user.data.attributes.twitter_username,
              githubUsername: user.data.attributes.github_username,
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
              twitterUsername: user.data.attributes.twitter_username,
              githubUsername: user.data.attributes.github_username,
            })
          );
        }
      } catch (error: any) {
        console.error(`ユーザー情報の取得に失敗しました\n${error.messages}`);
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
