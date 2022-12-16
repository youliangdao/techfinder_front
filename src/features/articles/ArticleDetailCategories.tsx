import { Space } from '@mantine/core';
import React from 'react';

import Comments from '../comments';
import ArticleCategoryLists from './ArticleCategoryLists';
import LargeArticleDetail from './LargeArticleDetail';

const articleItem = {
  image:
    'https://res.cloudinary.com/zenn/image/upload/s--jcHdXqhq--/co_rgb:222%2Cg_south_west%2Cl_text:notosansjp-medium.otf_37_bold:negokaz%2Cx_203%2Cy_98/c_fit%2Cco_rgb:222%2Cg_north_west%2Cl_text:notosansjp-medium.otf_70_bold:Git%2520%25E3%2581%25AE%25E3%2582%25B3%25E3%2583%259F%25E3%2583%2583%25E3%2583%2588%25E3%2583%2597%25E3%2583%25AC%25E3%2583%2595%25E3%2582%25A3%25E3%2583%2583%25E3%2582%25AF%25E3%2582%25B9%25E3%2582%2592%25E7%25B5%25B5%25E6%2596%2587%25E5%25AD%2597%25E3%2581%25A7%25E5%25BD%25A9%25E3%2582%258B%25EF%25BC%2588%25E8%2587%25AA%25E5%258B%2595%25E3%2581%25A7%25EF%25BC%2589%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vemVubi9pbWFnZS9mZXRjaC9zLS10eGV6ZktVRi0tL2NfbGltaXQlMkNmX2F1dG8lMkNmbF9wcm9ncmVzc2l2ZSUyQ3FfYXV0byUyQ3dfNzAvaHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyL2FjNzU1MzkxMTkuanBlZw==%2Cr_max%2Cw_90%2Cx_87%2Cy_72/v1627274783/default/og-base_z4sxah.png',
  categories: ['アイデア', 'Git'],
  title: 'Git のコミットプレフィックスを絵文字で彩る（自動で）',
  date: '1日前',
  media: 'zenn.dev',
};
const ArticleDetailCategories = () => {
  return (
    <>
      <LargeArticleDetail {...articleItem} />
      <Space h={50} />
      <ArticleCategoryLists />
      <Space h={50} />
      <Comments />
    </>
  );
};

export default ArticleDetailCategories;
