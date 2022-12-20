import React from 'react';

import { ReactComponent as ReactSVG } from '/src/assets/react.svg';
import { ReactComponent as RailsSVG } from '/src/assets/rubyonrails.svg';
import { ReactComponent as VueSVG } from '/src/assets/vue.svg';

import PopularCategoryLists from '../components/PopularCategoryLists';

const mockdata = [
  { title: 'Ruby on Rails', Icon: RailsSVG, path: 'rails' },
  { title: 'React', Icon: ReactSVG, path: 'react' },
  { title: 'Vue.js', Icon: VueSVG, path: 'vue' },
  { title: 'Ruby on Rails', Icon: RailsSVG, path: 'rails' },
  { title: 'React', Icon: ReactSVG, path: 'react' },
  { title: 'Vue.js', Icon: VueSVG, path: 'vue' },
  { title: 'Ruby on Rails', Icon: RailsSVG, path: 'rails' },
  { title: 'React', Icon: ReactSVG, path: 'react' },
  { title: 'Vue.js', Icon: VueSVG, path: 'vue' },
  { title: 'Ruby on Rails', Icon: RailsSVG, path: 'rails' },
  { title: 'React', Icon: ReactSVG, path: 'react' },
  { title: 'Vue.js', Icon: VueSVG, path: 'vue' },
  { title: 'Ruby on Rails', Icon: RailsSVG, path: 'rails' },
  { title: 'React', Icon: ReactSVG, path: 'react' },
  { title: 'Vue.js', Icon: VueSVG, path: 'vue' },
];
const PopularCategories = () => {
  return <PopularCategoryLists categories={mockdata} />;
};

export default PopularCategories;
