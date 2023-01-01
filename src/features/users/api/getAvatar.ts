import axios from 'axios';
import { endpoint } from 'config';

export const getAvatar = async (config: {
  headers: {
    authorization: string;
  };
}) => {
  try {
    const res = await axios.get(`${endpoint}/image`, config);
    return res.data.url;
  } catch (error) {
    throw new Error('画像を取得できませんでした。');
  }
};
