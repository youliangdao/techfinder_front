import { createStyles, Text, UnstyledButton } from '@mantine/core';
import { Category } from 'categories/types';
import React from 'react';

const useStyles = createStyles((theme) => ({
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: theme.radius.md,
    height: 90,
    backgroundColor: theme.colors.gray[0],
    transition: 'box-shadow 150ms ease, transform 100ms ease',

    '&:hover': {
      boxShadow: `${theme.shadows.md} !important`,
      transform: 'scale(1.05)',
    },
  },
}));

const CategoryItem = ({ title, Icon }: Category) => {
  const { classes } = useStyles();
  return (
    <UnstyledButton className={classes.item}>
      <>
        <Icon />
        <Text size="xs" mt={7}>
          {title}
        </Text>
      </>
    </UnstyledButton>
  );
};

export default CategoryItem;
