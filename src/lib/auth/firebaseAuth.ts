import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkAuth, login, logout, selectUser } from 'store/ducks/userSlice';
import { useAppDispatch, useAppSelector } from 'store/hooks';

export const useFirebaseAuth = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectUser);
  const nextOrObserver = async (authUser: User | null) => {
    if (authUser) {
      dispatch(checkAuth(true));
      dispatch(
        login({
          nickname: authUser.displayName || '',
          avatar: authUser.photoURL || '',
          uid: authUser.uid,
          description: '',
          authChecked: true,
        })
      );
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
