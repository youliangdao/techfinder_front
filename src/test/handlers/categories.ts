import { Category } from 'categories/types';
import { endpoint } from 'config';
import { DefaultBodyType, PathParams, rest } from 'msw';

const initialData = [
  {
    id: '1',
    title: 'Ruby on Rails',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg',
    path: 'rails',
  },
  {
    id: '2',
    title: 'React',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    path: 'react',
  },
  {
    id: '3',
    title: 'Vue.js',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    path: 'vue',
  },
  {
    id: '4',
    title: 'Ruby on Rails',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg',
    path: 'rails',
  },
  {
    id: '5',
    title: 'React',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    path: 'react',
  },
  {
    id: '6',
    title: 'Vue.js',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    path: 'vue',
  },
  {
    id: '7',
    title: 'Ruby on Rails',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg',
    path: 'rails',
  },
  {
    id: '8',
    title: 'React',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    path: 'react',
  },
  {
    id: '9',
    title: 'Vue.js',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    path: 'vue',
  },
  {
    id: '10',
    title: 'Ruby on Rails',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg',
    path: 'rails',
  },
  {
    id: '11',
    title: 'React',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    path: 'react',
  },
  {
    id: '12',
    title: 'Vue.js',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    path: 'vue',
  },
  {
    id: '13',
    title: 'Ruby on Rails',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg',
    path: 'rails',
  },
  {
    id: '14',
    title: 'React',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    path: 'react',
  },
  {
    id: '15',
    title: 'Vue.js',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    path: 'vue',
  },
  {
    id: '16',
    title: 'Ruby on Rails',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg',
    path: 'rails',
  },
  {
    id: '17',
    title: 'React',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    path: 'react',
  },
  {
    id: '18',
    title: 'Vue.js',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    path: 'vue',
  },
  {
    id: '19',
    title: 'Ruby on Rails',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg',
    path: 'rails',
  },
  {
    id: '20',
    title: 'React',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    path: 'react',
  },
  {
    id: '21',
    title: 'Vue.js',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    path: 'vue',
  },
  {
    id: '22',
    title: 'Ruby on Rails',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg',
    path: 'rails',
  },
  {
    id: '23',
    title: 'React',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    path: 'react',
  },
  {
    id: '24',
    title: 'Vue.js',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    path: 'vue',
  },
  {
    id: '25',
    title: 'Ruby on Rails',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg',
    path: 'rails',
  },
  {
    id: '26',
    title: 'React',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    path: 'react',
  },
  {
    id: '27',
    title: 'Vue.js',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    path: 'vue',
  },
  {
    id: '28',
    title: 'Ruby on Rails',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg',
    path: 'rails',
  },
  {
    id: '29',
    title: 'React',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    path: 'react',
  },
  {
    id: '30',
    title: 'Vue.js',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    path: 'vue',
  },
];

const categoryApi = {
  getAllCategories() {
    return initialData;
  },
  getPopularCategories() {
    return initialData.filter((category) => category.id.length % 2 === 0);
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getCategory(params: any) {
    return initialData.find((category) => category.path === params);
  },
};

export const categoryHandlers = [
  rest.get<DefaultBodyType, PathParams, Category[]>(
    `${endpoint}/categories`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(categoryApi.getAllCategories()));
    }
  ),
  rest.get<DefaultBodyType, PathParams, Category[]>(
    `${endpoint}/category/popular`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(categoryApi.getPopularCategories()));
    }
  ),
  rest.get<DefaultBodyType, PathParams, Category | undefined>(
    `${endpoint}/category`,
    (req, res, ctx) => {
      const categoryName = req.url.searchParams.get('category');
      console.log(categoryName);

      return res(
        ctx.status(200),
        ctx.json(categoryApi.getCategory(categoryName))
      );
    }
  ),
];
