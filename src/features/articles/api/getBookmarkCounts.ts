import { BookmarkCounts } from 'articles/types';
import axios from 'axios';
import { endpoint } from 'config';

export const getBookmarkCounts = async (id: string) => {
  try {
    const res = await axios.get<BookmarkCounts>(
      `${endpoint}/articles/${id}/bookmarks`
    );
    return res.data.count;
  } catch (error) {
    throw new Error('bookmark counts get error');
  }
};
