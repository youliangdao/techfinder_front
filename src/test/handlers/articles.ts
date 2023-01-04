import { Article } from 'articles/types';
import { endpoint } from 'config';
import { DefaultBodyType, PathParams, rest } from 'msw';

const initialData = [
  {
    id: '1',
    image:
      'https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    categories: [
      {
        title: 'Rails',
        path: 'rails',
      },
      {
        title: 'Vue',
        path: 'vue',
      },
      {
        title: 'React',
        path: 'react',
      },
    ],
    title: 'ChatGPTはどのように学習を行なっているのか',
    date: '1日前',
    media: {
      name: 'zenn.dev',
      image: '',
    },
    link: '',
  },
  {
    id: '2',
    image:
      'https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    categories: [
      {
        title: 'Rails',
        path: 'rails',
      },
      {
        title: 'Vue',
        path: 'vue',
      },
      {
        title: 'React',
        path: 'react',
      },
    ],
    title: 'ChatGPTはどのように学習を行なっているのか',
    date: '1日前',
    media: {
      name: 'zenn.dev',
      image: '',
    },
    link: '',
  },
  {
    id: '3',
    image:
      'https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    categories: [
      {
        title: 'Rails',
        path: 'rails',
      },
      {
        title: 'Vue',
        path: 'vue',
      },
      {
        title: 'React',
        path: 'react',
      },
    ],
    title: 'ChatGPTはどのように学習を行なっているのか',
    date: '1日前',
    media: {
      name: 'zenn.dev',
      image: '',
    },
    link: '',
  },
  {
    id: '4',
    image:
      'https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    categories: [
      {
        title: 'Vue',
        path: 'vue',
      },
      {
        title: 'React',
        path: 'react',
      },
    ],
    title: 'ChatGPTはどのように学習を行なっているのか',
    date: '1日前',
    media: {
      name: 'zenn.dev',
      image: '',
    },
    link: '',
  },
  {
    id: '5',
    image:
      'https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    categories: [
      {
        title: 'Rails',
        path: 'rails',
      },
      {
        title: 'React',
        path: 'react',
      },
    ],
    title: 'ChatGPTはどのように学習を行なっているのか',
    date: '1日前',
    media: {
      name: 'zenn.dev',
      image: '',
    },
    link: '',
  },
  {
    id: '6',
    image:
      'https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    categories: [
      {
        title: 'Rails',
        path: 'rails',
      },
      {
        title: 'Vue',
        path: 'vue',
      },
    ],
    title: 'ChatGPTはどのように学習を行なっているのか',
    date: '1日前',
    media: {
      name: 'zenn.dev',
      image: '',
    },
    link: '',
  },
  {
    id: '7',
    image:
      'https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    categories: [
      {
        title: 'Vue',
        path: 'vue',
      },
      {
        title: 'React',
        path: 'react',
      },
    ],
    title: 'ChatGPTはどのように学習を行なっているのか',
    date: '1日前',
    media: {
      name: 'zenn.dev',
      image: '',
    },
    link: '',
  },
  {
    id: '8',
    image:
      'https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    categories: [
      {
        title: 'Vue',
        path: 'vue',
      },
      {
        title: 'React',
        path: 'react',
      },
    ],
    title: 'ChatGPTはどのように学習を行なっているのか',
    date: '1日前',
    media: {
      name: 'zenn.dev',
      image: '',
    },
    link: '',
  },
];

const articleApi = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getArticles(params: any) {
    if (params === 'popular') {
      return initialData.filter((value) => parseInt(value.id) % 2 === 0);
    }
    return initialData;
  },
  getCategoryArticles({ categoryName, articleGenre }: any) {
    if (articleGenre === 'popular') {
      const categoryArticles = initialData.filter((value) =>
        value.categories.some((category) => category.path === categoryName)
      );
      return categoryArticles.filter((value) => parseInt(value.id) % 2 === 0);
    }
    return initialData.filter((value) =>
      value.categories.some((category) => category.path === categoryName)
    );
  },
  getRisingArticles() {
    return initialData;
  },
};

export const articleHandlers = [
  rest.get<DefaultBodyType, PathParams, Article[]>(
    `${endpoint}/articles`,
    (req, res, ctx) => {
      const articleGenre = req.url.searchParams.get('tab');
      return res(
        ctx.status(200),
        ctx.json(articleApi.getArticles(articleGenre))
      );
    }
  ),
  rest.get<DefaultBodyType, PathParams, Article[]>(
    `${endpoint}/articles/:categoryName`,
    (req, res, ctx) => {
      const { categoryName } = req.params;
      const articleGenre = req.url.searchParams.get('tab');
      return res(
        ctx.status(200),
        ctx.json(articleApi.getCategoryArticles({ categoryName, articleGenre }))
      );
    }
  ),
  rest.get<DefaultBodyType, PathParams, Article[]>(
    `${endpoint}/articles/rising`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(articleApi.getRisingArticles()));
    }
  ),
];
