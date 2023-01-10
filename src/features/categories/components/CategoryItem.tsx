import { Card, createStyles, Image, Skeleton, Text } from '@mantine/core';
import { CategoryItemProps } from 'categories/types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { setCategory } from 'store/ducks/categorySlice';
import { useAppDispatch } from 'store/hooks';

const useStyles = createStyles((theme) => ({
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: theme.radius.md,
    height: 100,
    backgroundColor: theme.colors.gray[0],
    transition: 'box-shadow 150ms ease, transform 100ms ease',

    '&:hover': {
      boxShadow: `${theme.shadows.md} !important`,
      transform: 'scale(1.05)',
      cursor: 'pointer',
    },
  },
}));

const CategoryItem = ({ isLoading, category }: CategoryItemProps) => {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <Card
      className={classes.item}
      onClick={() => {
        dispatch(
          setCategory({
            id: category.id,
            title: category.title,
            image: category.image,
            path: category.path,
          })
        );
        navigate(`/categories/${category.path}/all`);
      }}
    >
      {!isLoading ? (
        <>
          <Image src={category.image} height={50} fit="contain" />
          <Text size="xs" mt={7}>
            {category.title}
          </Text>
        </>
      ) : (
        <Skeleton height={50} circle radius="xl" />
      )}
    </Card>
  );
};

export default CategoryItem;
