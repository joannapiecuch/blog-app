import axios, { AxiosResponse } from 'axios';
import { PostDataInterface, PostsListDataInterface, PostQuery } from '../types';

const baseUrl = process.env.REACT_APP_CLIENT_URL || '';
const option = {
  headers: {
    'x-api-key': 'thisisapikey'
  }
};
export const getAllPosts = async (): Promise<PostsListDataInterface> => {
  const response = await axios.get(`${baseUrl}/posts`, option);

  return {
    status: response.status,
    data: response.data
  };
};

export const getPostDetails = async (id?: string): Promise<PostDataInterface> => {
  const response = await axios.get(`${baseUrl}/posts/${id}`, option);

  return {
    data: response.data,
    status: response.status
  };
};

export const addPost = async (query: PostQuery): Promise<PostDataInterface> => {
  const response = await axios.post(
    `${baseUrl}/posts`,
    {
      ...query
    },
    option
  );

  return {
    data: response.data,
    status: response.status
  };
};

export const deletePost = async (id: string): Promise<AxiosResponse> => {
  return await axios.delete(`${baseUrl}/posts/${id}`, option);
};
