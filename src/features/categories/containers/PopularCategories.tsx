import React from 'react';

import { ReactComponent as ReactSVG } from '/src/assets/react.svg';
import { ReactComponent as RailsSVG } from '/src/assets/rubyonrails.svg';
import { ReactComponent as VueSVG } from '/src/assets/vue.svg';

import PopularCategoryLists from '../components/PopularCategoryLists';

const mockdata = [
  { title: 'Ruby on Rails', Icon: RailsSVG },
  { title: 'React', Icon: ReactSVG },
  { title: 'Vue.js', Icon: VueSVG },
  { title: 'Ruby on Rails', Icon: RailsSVG },
  { title: 'React', Icon: ReactSVG },
  { title: 'Vue.js', Icon: VueSVG },
  { title: 'Ruby on Rails', Icon: RailsSVG },
  { title: 'React', Icon: ReactSVG },
  { title: 'Vue.js', Icon: VueSVG },
  { title: 'Ruby on Rails', Icon: RailsSVG },
  { title: 'React', Icon: ReactSVG },
  { title: 'Vue.js', Icon: VueSVG },
  { title: 'Ruby on Rails', Icon: RailsSVG },
  { title: 'React', Icon: ReactSVG },
  { title: 'Vue.js', Icon: VueSVG },
];
const PopularCategories = () => {
  return <PopularCategoryLists categories={mockdata} />;
};

export default PopularCategories;
