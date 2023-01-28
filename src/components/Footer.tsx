/* eslint-disable tailwindcss/no-custom-classname */
import { Anchor, Container, Group, Image, Text } from '@mantine/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '/src/assets/logo3.png';

// const useStyles = createStyles((theme) => ({
//   footer: {
//     marginTop: 120,
//     paddingTop: theme.spacing.xl * 2,
//     paddingBottom: theme.spacing.xl * 2,
//     backgroundColor:
//       theme.colorScheme === 'dark'
//         ? theme.colors.dark[6]
//         : theme.colors.gray[0],
//     borderTop: `1px solid ${
//       theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
//     }`,
//   },

//   logo: {
//     maxWidth: 200,

//     [theme.fn.smallerThan('sm')]: {
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//     },
//   },

//   description: {
//     marginTop: 5,

//     [theme.fn.smallerThan('sm')]: {
//       marginTop: theme.spacing.xs,
//       textAlign: 'center',
//     },
//   },

//   inner: {
//     display: 'flex',
//     justifyContent: 'space-between',

//     [theme.fn.smallerThan('sm')]: {
//       flexDirection: 'column',
//       alignItems: 'center',
//     },
//   },

//   groups: {
//     display: 'flex',
//     flexWrap: 'wrap',

//     [theme.fn.smallerThan('sm')]: {
//       display: 'none',
//     },
//   },

//   wrapper: {
//     width: 160,
//   },

//   link: {
//     display: 'block',
//     color:
//       theme.colorScheme === 'dark'
//         ? theme.colors.dark[1]
//         : theme.colors.gray[6],
//     fontSize: theme.fontSizes.sm,
//     paddingTop: 3,
//     paddingBottom: 3,

//     '&:hover': {
//       textDecoration: 'underline',
//     },
//   },

//   title: {
//     fontSize: theme.fontSizes.lg,
//     fontWeight: 700,
//     fontFamily: `Greycliff CF, ${theme.fontFamily}`,
//     marginBottom: theme.spacing.xs / 2,
//     color: theme.colorScheme === 'dark' ? theme.white : theme.black,
//   },

//   afterFooter: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: theme.spacing.xl,
//     paddingTop: theme.spacing.xl,
//     paddingBottom: theme.spacing.xl,
//     borderTop: `1px solid ${
//       theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
//     }`,

//     [theme.fn.smallerThan('sm')]: {
//       flexDirection: 'column',
//     },
//   },

//   social: {
//     [theme.fn.smallerThan('sm')]: {
//       marginTop: theme.spacing.xs,
//     },
//   },
// }));

interface FooterLinksProps {
  data: { label: string; link: string }[];
}

const FooterLinks = ({ data }: FooterLinksProps) => {
  const navigate = useNavigate();

  const links = data.map((link) => (
    <Anchor<'a'>
      color="dimmed"
      key={link.label}
      onClick={() => navigate(link.link)}
      size="sm"
      underline={false}
      className="hover:bg-m_gray-2"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <footer className="bg-m_gray-0 border-t-m_gray-2 mt-0 border-0 border-t border-solid py-12">
      <Container
        className="flex items-center justify-between max-sm:flex-col"
        size="lg"
      >
        <Image
          src={logo}
          width={200}
          fit="contain"
          onClick={() => navigate('/')}
        />
        <Group className="space-x-3 max-sm:mt-4">{links}</Group>
      </Container>
      <Container
        className="border-t-m_gray-2 mt-6 flex items-center justify-between border-0 border-t border-solid py-6 px-4 max-sm:flex-col"
        size="lg"
      >
        <Text color="dimmed" size="sm">
          © 2023 All rights reserved.
        </Text>
      </Container>
    </footer>
  );
};

export default FooterLinks;
