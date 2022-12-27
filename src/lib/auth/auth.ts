import {
  getAdditionalUserInfo,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { NavigateFunction } from 'react-router-dom';

export const signInWithGoogle = (
  setOpened: (flag: boolean) => void,
  navigate: NavigateFunction
) => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
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
