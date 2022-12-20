import React, { useState } from 'react';

import { ReactComponent as ReactSVG } from '/src/assets/react.svg';
import { ReactComponent as RailsSVG } from '/src/assets/rubyonrails.svg';
import { ReactComponent as VueSVG } from '/src/assets/vue.svg';

import SearchInput from '../../../components/SearchInput';
import CategoryLists from '../components/CategoryLists';

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
const FilterableCategoryLists = () => {
  const [filterInput, setFilterInput] = useState<string>('');
  return (
    <>
      <SearchInput {...{ filterInput, setFilterInput }} />
      <br />
      <CategoryLists categories={mockdata} />
    </>
  );
};

export default FilterableCategoryLists;
