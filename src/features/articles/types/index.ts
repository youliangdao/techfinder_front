export type Article = {
  title: string;
  categories: string[];
  date: string;
  image: string;
  media: string;
};

export type ArticleListsProps = {
  articleItems: Article[];
  leftGenre: string;
  rightGenre: string;
};
