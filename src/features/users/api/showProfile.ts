import axios from 'axios';
import { endpoint } from 'config';
import { ResponseUserType } from 'users/types';

export const showProfile = async (config: {
  headers: {
    authorization: string;
  };
}) => {
  try {
    const res = await axios.get<ResponseUserType>(
      `${endpoint}/profile`,
      config
    );

    return res.data;
  } catch (error) {
    throw new Error();
  }
};
