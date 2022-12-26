import { createStyles, Group, Paper, Stack, Text, Title } from '@mantine/core';
import { GoogleButton } from 'Button/SocialButtons';
import { auth, provider } from 'firebase';
import { getAdditionalUserInfo, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 900,
    backgroundSize: 'cover',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)',
  },

  form: {
    borderRight: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    minHeight: 900,
    maxWidth: 450,
    paddingTop: 80,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: '100%',
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  logo: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    width: 120,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

type CustomLocation = {
  state: { from: { pathname: string } };
};

const LoginImage = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const location: CustomLocation = useLocation() as CustomLocation;
  const fromPathName: string = location.state.from.pathname;

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        if (getAdditionalUserInfo(result)?.isNewUser) {
          navigate('/onboarding');
          return;
        }
        navigate(fromPathName, { replace: true });
      })
      .catch((error) => {
        if (error.code === 'auth/account-exists-with-different-credential') {
          alert(
            `${error.customData.email}は他のSNSと連携した既存ユーザーが登録済みです。既存ユーザーでログイン後、こちらのSNSとの連携が可能です`
          );
          return;
        }
        alert(`ログイン/新規登録に失敗しました。\n${error.message}`);
      });
  };
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} align="center" my="md">
          Sign In
        </Title>

        <Stack className="space-y-4">
          <Text size="sm" color="dimmed">
            新規登録、ログインのどちらも以下のリンクから行うことができます。利用規約、プライバシーポリシーに同意したうえでログインしてください。
          </Text>
          <Group grow mb="md" mt="md">
            <GoogleButton
              onClick={signInWithGoogle}
              title="Login with Google"
            />
            {/* <TwitterButton radius="xl">Twitter</TwitterButton> */}
          </Group>
        </Stack>
      </Paper>
    </div>
  );
};

export default LoginImage;
