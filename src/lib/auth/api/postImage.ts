import axios from 'axios';
import { endpoint } from 'config';

export const postImage = async (
  file: File | null,
  config: {
    headers: {
      authorization: string;
    };
  }
) => {
  const {
    data: { url, fields },
    status,
  } = await axios.post(`${endpoint}/image`, null, config);

  if (status !== 200) {
    throw new Error('upload error');
  }
  const formData = new FormData();
  for (const key in fields) {
    formData.append(key, fields[key]);
  }
  if (file) {
    formData.append('file', file);
    const res = await axios.post(`${url}`, formData);
    if (res.status !== 201) {
      throw new Error('upload error');
    }
    const resXML = parseXML(res.data);
    const key = resXML.getElementsByTagName('Key')[0].childNodes[0].nodeValue;
    return key;
  }
  return '';
};

const parseXML = (text: string) =>
  new DOMParser().parseFromString(text, 'application/xml');
