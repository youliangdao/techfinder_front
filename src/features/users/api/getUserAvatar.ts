import axios from 'axios';
import { endpoint } from 'config';

export const getUserAvatar = async (userId: string) => {
  try {
    const res = await axios.get<{ status: string; url: string }>(
      `${endpoint}/images/${userId}`
    );
    return res.data.url;
  } catch (error) {
    throw new Error('画像を取得できませんでした。');
  }
};
