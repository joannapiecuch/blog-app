export interface PostsListDataInterface {
  data?: PostInterface[];
  status?: number;
}

export interface PostDataInterface {
  data?: PostInterface;
  status?: number;
}

export interface PostInterface {
  title: string;
  description: string;
  id: string;
  createdAt: string;
}

export interface PostQuery {
  title: string;
  description: string;
}
