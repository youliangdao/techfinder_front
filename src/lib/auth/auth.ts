import { auth, provider } from 'firebase';
import {
  getAdditionalUserInfo,
  onAuthStateChanged,
  signInWithPopup,
  User,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, logout, selectUser } from 'store/ducks/userSlice';
import { useAppDispatch, useAppSelector } from 'store/hooks';

export const useFirebaseAuth = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectUser);
  const [authChecked, setAuthChecked] = useState(false);
  const nextOrObserver = async (authUser: User | null) => {
    if (authUser) {
      setAuthChecked(true);
      dispatch(
        login({
          nickname: authUser.displayName || '',
          avatar: authUser.photoURL || '',
          uid: authUser.uid,
          description: '',
        })
      );
    } else {
      dispatch(logout());
    }
  };

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, nextOrObserver);

    return () => {
      unSub();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signInWithGoogle = (setOpened: (flag: boolean) => void) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setOpened(false);
        if (getAdditionalUserInfo(result)?.isNewUser) {
          navigate('/onboarding');
          return;
        }
        navigate('/');
      })
      .catch((error) => {
        setOpened(false);
        if (error.code === 'auth/account-exists-with-different-credential') {
          alert(
            `${error.customData.email}は他のSNSと連携した既存ユーザーが登録済みです。既存ユーザーでログイン後、こちらのSNSとの連携が可能です`
          );
          return;
        }
        alert(`ログイン/新規登録に失敗しました。\n${error.message}`);
      });
  };

  const signOut = async () => {
    auth.signOut();
    setAuthChecked(false);
  };

  return {
    currentUser,
    authChecked,
    signInWithGoogle,
    signOut,
  };
};
